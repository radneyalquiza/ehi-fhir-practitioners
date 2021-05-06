import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import {
	emptyList,
	fetchByFamilyNameThunk,
	fetchByIDThunk
} from "../redux/profileSlice";
import './profilesearch.scss';

interface SearchProps {
	defaultQuery?: string;
	onSearch(newQuery: string): void;
}

enum SearchType {
	BYNAME,
	BYID
}

export const ProfileSearch = ({ defaultQuery, onSearch }: SearchProps) => {

	const [query, setQuery] = useState(defaultQuery);
	const [searchType, setSearchType] = useState(SearchType.BYNAME);
	const dispatch = useAppDispatch();

	const searchChange = (evt: any ) => {
		const val = evt.target.value;
		setQuery(val);
		onSearch(val);
	}

	const searchSubmit = (evt: FormEvent) => {
		evt.preventDefault();
		evt.stopPropagation();

		if(query || query === '') {
			searchType === SearchType.BYNAME
				? dispatch(fetchByFamilyNameThunk(query))
				: dispatch(fetchByIDThunk(query));
		} else {
			dispatch(emptyList);
		}
	}

	const setSearchTypeMain = (st: SearchType) => {
		setQuery('');
		dispatch(emptyList());
		setSearchType(st);
	}

	return (
		<form onSubmit={searchSubmit}>
			<div className="search">
				<div className="by-actions">
					<button
						type="button"
						className="toggle-byname"
						onClick={() => setSearchTypeMain(SearchType.BYNAME)}
					>
						By Family Name
					</button>
					<button
						type="button"
						className="toggle-byid"
						onClick={() => setSearchTypeMain(SearchType.BYID)}
					>
						By ID
					</button>
				</div>
				<input type="text" value={query} onChange={searchChange} />
				<button type="submit" className="perform-search">
					{searchType === SearchType.BYNAME
						? "Search Name"
						: "Search ID"}
				</button>
			</div>
		</form>
	);
}
