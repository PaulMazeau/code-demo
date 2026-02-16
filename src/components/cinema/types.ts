export type CinemaProgram = {
	id: string;
	title: string;
	genre: string;
	duration: string;
	description: string;
	detailsUrl: string;
	time: string;
	timeISO: string;
	dateLabel: string;
	dateISO: string;
	backgroundImage?: string;
	isNew?: boolean;
	isAdded?: boolean;
};

export type CinemaPageData = {
	cinemaName: string;
	cinemaDetailsUrl: string;
	seasonBookingUrl: string;
	programs: CinemaProgram[];
};
