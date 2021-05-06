export enum ResourceType {
	UNKNOWN = 'Unknown',
	BUNDLE = 'Bundle',
	PRACTITIONER = 'Practitioner',
	ORGANIZATION = 'Organization'
}

export type Code = string;
export type URI = string;
export type IdentifierUse = 'usual' | 'official' | 'temp' | 'secondary' | 'old';
export type AddressUse = 'home' | 'work' | 'temp' | 'old' | 'billing';
export type AddressType = 'postal' | 'physical' | 'both'

export class Period {
	start?: Date;
	end?: Date;
	constructor() {
		this.start = new Date();
		this.end = new Date();
	}
}

export interface Extension {
	valueString?: string;
	url?: string;
}

export interface Link {
	relation?: string;
	url?: URI;
}

export abstract class Resource {
	resourceType?: ResourceType;
	extension?: Extension;
	fullUrl?: URI;
	resource?: Resource;

	constructor() {
		this.resourceType = ResourceType.UNKNOWN;
	}
}

export interface Meta {
	version?: string;
	lastUpdated?: string;
}

export interface Coding {
	system?: URI;
	version?: string;
	code?: Code;
	display?: string;
	userSelected?: boolean;
}

export interface CodeableConcept {
	coding?: Coding;
	text?: string;
}

export interface Identifier {
	value?: string;
	period?: Period;
	system?: URI;
	type?: CodeableConcept;
	use?: IdentifierUse;
}

export interface Address {
	use?: AddressUse;
	type?: AddressType;
	text?: string;
	line?: Array<string>;
	city?: string;
	district?: string;
	state?: string;
	postalCode?: string;
	country?: string;
	period?: Period;
}
