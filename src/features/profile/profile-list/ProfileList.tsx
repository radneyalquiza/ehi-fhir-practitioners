import { Practitioner } from "../../../models/practitioner.model"
import { ProfileItem } from "./ProfileItem";
import './profilelist.scss';

interface ProfileListProps {
	list?: Array<Practitioner>;
	query?: string
}


export const ProfileList = ({ list, query }: ProfileListProps) => {
	return <div className="profile-list">
		{
			(list && list.length)
			? list?.map(a => { console.log(a); return <ProfileItem key={a?.id} item={a} />})
			: <div className="no-list">No Practitioners Found.</div>
		}
	</div>;
};
