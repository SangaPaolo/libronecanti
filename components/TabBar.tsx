import { icons } from "@/constants/icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { LayoutChangeEvent, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import TabBarButton from "./TabBarButton";

export function MyTabBar({
	state,
	descriptors,
	navigation,
}: BottomTabBarProps) {
	const icon = {
		trend: icons.trendColor,
		trendEmpty: icons.trendEmpty,
		indice: icons.indexColor,
		indiceEmpty: icons.indexEmpty,
		index: icons.logoNoBg,
		indexEmpty: icons.logoLight,
		search: icons.lensColor,
		searchEmpty: icons.lensEmpty,
		preferiti: icons.prefColor,
		preferitiEmpty: icons.prefEmpty,
	};
	const [dimensions, setDimensions] = useState({height: 20, width: 100});

	const buttonWidth = dimensions.width / state.routes.length;

	const onTabbarLayout = (e: LayoutChangeEvent) => {
		setDimensions({
			height: e.nativeEvent.layout.height,
			width: e.nativeEvent.layout.width,
		})
	}

	const tabPositionX = useSharedValue(0);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: tabPositionX.value }],
		}
	})

	return (
		<View onLayout={onTabbarLayout} className="absolute min-h-[70px] bottom-14 flex-row justify-center p-1 items-center bg-secondary mx-7 rounded-[50px] shadow-lg">
			<Animated.View className="absolute bg-primary-light rounded-full max-w-[66px] min-w-[60px] min-h-[60px] max-h-[66px]" style={animatedStyle}/>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					tabPositionX.value = withSpring(buttonWidth * index, {duration: 1500});
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, route.params);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				return (
					<TabBarButton
						key={route.name}
						onPress={onPress}
						onLongPress={onLongPress}
						isFocused={isFocused}
						routeName={route.name}
						label={label}
						icon={isFocused ? icon[route.name] : icon[`${route.name}Empty`]}
					/>
					// <TouchableOpacity
					// 	key={route.name}
					// 	accessibilityRole="button"
					// 	accessibilityState={isFocused ? { selected: true } : {}}
					// 	accessibilityLabel={options.tabBarAccessibilityLabel}
					// 	testID={options.tabBarButtonTestID}
					// 	onPress={onPress}
					// 	onLongPress={onLongPress}
					// 	className="flex-1 justify-center items-center gap-1"
					// >
					// 	<Image
					// 		source={isFocused ? icon[route.name] : icon[`${route.name}Empty`]}
					// 		className="w-9 h-9"
					// 		resizeMode="contain"
					// 	/>
					// 	{isFocused && (
					// 		<Text className="text-primary font-bold text-xs">
					// 			{label as string}
					// 		</Text>
					// 	)}
					// </TouchableOpacity>
				);
			})}
		</View>
	);
}
