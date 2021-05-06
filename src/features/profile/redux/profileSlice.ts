import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { Resource } from '../../../models/common.model';
import { Bundle, Practitioner } from "../../../models/practitioner.model";
import * as ProfileEndpoints from '../ProfileEndpoints';

export const minTimeout = 1000;

export interface PendingStatus {
	search?: boolean;
}

// state blueprint
export interface ProfileState {
	defaultQuery?: string;
	pending: PendingStatus;
	list?: Array<Practitioner>;
}

// set initial state
const initState: ProfileState = {
	defaultQuery: 'Kelly',
	pending: { search: false }
}

// async thunks
export const fetchByFamilyNameThunk = createAsyncThunk(
	"profile/fetchByFamilyNameThunk",
	async (familyName?: string) => {
		const res: Bundle = await ProfileEndpoints.fetchByFamilyName(familyName);
		return res.entry;	// drop the rest of props
	}
);

// returns 1 Practitioner
export const fetchByIDThunk = createAsyncThunk(
	"profile/fetchByIDThunk",
	async (id?: string) => {
		const res: Practitioner = await ProfileEndpoints.fetchById(id);
		return res;
	}
);

// create slice (Typescript Redux pattern)
export const profileSlice = createSlice({
	name: 'profile',
	initialState: initState,
	reducers: {
		emptyList: (state) => state.list = undefined
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchByFamilyNameThunk.pending, (state) => {
				state.pending.search = true;
			})
			.addCase(fetchByFamilyNameThunk.fulfilled, (state, action) => {
				state.pending.search = false;
				const list = action.payload;
				state.list = list?.map((a: Resource) => {
					return {
						...a.resource,
					} as Practitioner;
				});
			});
		builder
			.addCase(fetchByIDThunk.pending, (state) => {
				state.pending.search = true;
			})
			.addCase(fetchByIDThunk.fulfilled, (state, action) => {
				state.pending.search = false;
				const item = action.payload;
				state.list = [item];
			});
	}
})

export const { emptyList } = profileSlice.actions;

// selectors
export const selectDefaultQuery = (state: RootState) => state.profile.defaultQuery;
export const selectPractitionerList = (state: RootState) => state.profile.list;
export const selectPendingSearch = (state: RootState) => state.profile.pending.search;

export default profileSlice.reducer;
