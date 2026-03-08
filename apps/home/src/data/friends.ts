// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "然飞ranfeyのブログ世界",
		imgurl: "https://blog.ranfey.online/wp-content/uploads/2024/03/1710220251-%E5%A4%B4%E5%83%8F.jpg",
		desc: "「何もできないの僕はただ必死に生きている」",
		siteurl: "https://blog.ranfey.online/",
		tags: ["五公里车队"],
	},
	{
		id: 2,
		title: "Lwrzgo’s blog!!!!!",
		imgurl: "https://blog.lwrzgocloud.top/_astro/logo.ClsNWbN1_1Ran53.webp",
		desc: "似乎是个萌二🤔，CTBUer",
		siteurl: "https://blog.lwrzgocloud.top",
		tags: ["五公里车队", "网站运维"],
	},
	{
		id: 3,
		title: "是末末子呀( 口▽｀)",
		imgurl: "https://momozi.online/wp-content/uploads/2025/03/head.jpg",
		desc: "我不是机器人",
		siteurl: "https://momozi.online/",
		tags: ["五公里车队"],
	},

	{
		id: 4,
		title: "GitHub",
		imgurl: "https://avatars.githubusercontent.com/u/9919?v=4&s=640",
		desc: "Where the world builds software",
		siteurl: "https://github.com",
		tags: ["Development", "Platform"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
