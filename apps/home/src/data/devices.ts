// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	第八届·会长团: [
		{
			name: "张威老师",
			image: "/images/device/default.png",
			specs: "指导老师",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "李定邦",
			image: "/images/device/default.png",
			specs: "会长",
			description: "原神",
			link: "",
		},
		{
			name: "潘宁",
			image: "/images/device/default.png",
			specs: "副会长",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "李昊展",
			image: "/images/device/default.png",
			specs: "副会长",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "章俊杰",
			image: "/images/device/default.png",
			specs: "副会长",
			description: "这是一句简介",
			link: "",
		},
	],
	第X届·会长团: [
		{
			name: "姓名",
			image: "/images/device/default.png",
			specs: "职位",
			description: "描述",
			link: "",
		},
	],
};
