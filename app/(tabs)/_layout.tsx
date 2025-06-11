import { MyTabBar } from "@/components/TabBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import {
	Image,
	ImageBackground,
	ImageSourcePropType,
	View,
} from "react-native";

function TabIcon({ focused, icon }: any) {
	if (focused) {
		return (
			<ImageBackground
				source={images.hightlight as ImageSourcePropType}
				className="w-[68px] h-[68px] items-center justify-center rounded-full"
			>
				<Image source={icon} className="w-6 h-6" />
			</ImageBackground>
		);
	}
	return (
		<View>
			<Image
				source={icon}
				className="w-5 h-5"
				style={{ tintColor: "#A8B5DB" }}
			/>
		</View>
	);
}

const _layout = () => {
	return (
		<Tabs tabBar={(props) => <MyTabBar {...props} />}>
			<Tabs.Screen
				name="trend"
				options={{
					title: "Trend",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							focused={focused}
							icon={icons.trendColor as ImageSourcePropType}
							iconEmpty={icons.trendEmpty as ImageSourcePropType}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="indice"
				options={{
					title: "Indice",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							focused={focused}
							icon={icons.indexColor as ImageSourcePropType}
							iconEmpty={icons.indexEmpty as ImageSourcePropType}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							focused={focused}
							icon={icons.logoNoBg as ImageSourcePropType}
							iconEmpty={icons.logoNoBg as ImageSourcePropType}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					title: "Search",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							focused={focused}
							icon={icons.lensColor as ImageSourcePropType}
							iconEmpty={icons.lensEmpty as ImageSourcePropType}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="preferiti"
				options={{
					title: "Preferiti",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							focused={focused}
							icon={icons.prefColor as ImageSourcePropType}
							iconEmpty={icons.prefEmpty as ImageSourcePropType}
						/>
					),
				}}
			/>
		</Tabs>
	);
};

export default _layout;
