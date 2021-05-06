import { Practitioner } from "../../../models/practitioner.model"

interface ProfileDetailProps {
	item?: Practitioner;
}

export const ProfileDetail = ({ item }: ProfileDetailProps) => {
	return (
		<div className="profile-detail">
			item.id
		</div>
	)
}
