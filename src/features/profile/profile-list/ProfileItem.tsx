import { faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Practitioner } from "../../../models/practitioner.model";
import './profileitem.scss';

interface ProfileItemProps {
	item?: Practitioner;
}

export const ProfileItem = ({ item }: ProfileItemProps) => {
	return (
		<div className="profile-item">
			<div className="profile-picture">
				<FontAwesomeIcon icon={faUser} />
			</div>

			<div className="profile-info">
				<div className="profile-name">
					{item?.name?.map((n) => (
						<span key={n.text}>{n.text}</span>
					))}
				</div>
				<div className="profile-address">
					{item?.address?.map((n, idx) => (
						<div key={idx.toString()}>
							{n.line?.map((v) => (
								<span>{v}</span>
							))}
							<span className="city">{n.city}</span>
							<span className="postal">,{n.postalCode}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

