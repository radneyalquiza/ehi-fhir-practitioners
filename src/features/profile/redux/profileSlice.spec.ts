import profileReducer, {
	ProfileState,
	emptyList,
} from "./profileSlice";

describe("profile reducer", () => {
	const initialState: ProfileState = {
		defaultQuery: 'Kelly',
		pending: {
			search: false
		}
	};

	it("should handle empty", () => {
		const actual = profileReducer(initialState, emptyList());
		expect(actual.list).toEqual(undefined);
	});

});
