// 本地番剧数据配置
export type AnimeItem = {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
};

const localAnimeList: AnimeItem[] = [
	{
		title: "速度与激情8",
		status: "planned",
		rating: 7.0,
		cover: "/assets/anime/su8.webp",
		description:
			"多米尼克（范·迪塞尔 Vin Diesel 饰）与莱蒂（米歇尔·罗德里格兹 Michelle Rodriguez 饰）共度蜜月，布莱恩与米娅退出了赛车界，这支曾环游世界的顶级飞车家族队伍的生活正渐趋平淡。然而，一位神秘女子Cipher（查理兹·塞隆 Charlize T heron 饰）的出现，令整个队伍卷入信任与背叛的危机，面临前所未有的考验。",
		episodes: "1集",
		year: "2017",
		genre: ["动作", "犯罪"],
		studio: "环球影业",
		link: "https://movie.douban.com/subject/26260853/",
		progress: 1,
		totalEpisodes: 1,
		startDate: "2017",
		endDate: "2017",
	},
];

export default localAnimeList;
