import { Bundle, Practitioner } from "../../models/practitioner.model";
import { Resource } from "../../models/common.model";

// TODO: move to config
const queryPractitionerURL = 'http://concept01.ehealthexchange.org:52774/hubonfhir/r4/Practitioner';

const fetchByFamilyName = (name?: string): Promise<Bundle> => {
	return fetch(`${queryPractitionerURL}?family=${name}`).then((res) =>
		res.json()
	);
}

const fetchById = (id?: string): Promise<Practitioner> => {
	return fetch(`${queryPractitionerURL}/${id}`).then((res) => res.json());
}

export {
	fetchByFamilyName,
	fetchById,
};
