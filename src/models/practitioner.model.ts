import { Code, Address, Identifier, Period, ResourceType, Resource, Meta, Link } from "./common.model";

export interface HumanName {
	use?: HumanNameUse;
	text?: string;
	family?: string;
	given?: string;
	prefix?: string;
	suffix?: string;
	period?: Period;
}

export type HumanNameUse = 'usual' | 'official' | 'temp' | 'nickname' | 'anonymous' | 'old' | 'maiden';
export type Gender = 'male' | 'female' | 'unknown';
export type System = 'phone' | 'fax' | 'email' | 'pager' | 'url' | 'sms' | 'other';
export type ContactPointUse = 'home' | 'work' | 'temp' | 'old' | 'mobile'
export type BundleType = 'document' | 'message' | 'transaction' | 'transaction-response' | 'batch' | 'batch-response' | 'history' | 'searchset' | 'collection'


export interface ContactPoint {
	system?: System;
	value?: string;
	use?: ContactPointUse;
	rank?: number;
	period?: Period;
}

export class Practitioner extends Resource {
	id?: number;
	identifier?: Identifier;
	active?: boolean;
	name?: Array<HumanName>;
	telecom?: Array<ContactPoint>;
	address?: Array<Address>;
	gender?: Gender;
	birthDate?: Date;
	photo?: any;
	meta?: Meta;

	constructor() {
		super();
		this.resourceType = ResourceType.PRACTITIONER;
	}
}

export interface Bundle {
	id?: string;
	resourceType: ResourceType;
	identifier?: Identifier;
	type?: BundleType;
	timeStamp?: Date;
	total?: number;
	entry?: Array<Resource>;
	link?: Link;
}

