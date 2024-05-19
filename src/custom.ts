export type Link = {
	kind: string;
	url: string;
};

export type Person = {
	nickname: string;
	role: string;
	links?: Link[];
	image?: string;
};
