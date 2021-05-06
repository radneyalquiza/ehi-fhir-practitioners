import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { Practitioner } from "../../models/practitioner.model";
import { ProfileList } from "./profile-list/ProfileList";
import { ProfileSearch } from "./profile-search/ProfileSearch";
import { selectDefaultQuery, selectPendingSearch, selectPractitionerList } from "./redux/profileSlice";
import './profile.scss';

export const Profile = () => {

	const defaultQuery = useAppSelector(selectDefaultQuery);
	const list = useAppSelector(selectPractitionerList);
	const isPending = useAppSelector(selectPendingSearch);

	const [query, setQuery] = useState(
		defaultQuery /* get default query from store */
	);

	return (
		<div className="main-profile">
			<ProfileSearch
				defaultQuery={defaultQuery}
				onSearch={(newQuery: string) => setQuery(newQuery)}
			/>

			{isPending ? (
				<div className="loader">Loading</div>
			) : (
				<ProfileList list={list} />
			)}
		</div>
	);
}
