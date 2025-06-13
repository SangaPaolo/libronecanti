import { icons } from "@/constants/icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import TabBarButton from "./TabBarButton";

export function MyTabBar({
	state,
	descriptors,
	navigation,
}: BottomTabBarProps) {
	type IconMap = {
		[key: string]: string;
	};

	const icon: IconMap = {
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
	// const [dimensions, setDimensions] = useState({ height: 20, width: 100 });

	// const buttonWidth = dimensions.width / state.routes.length;

	// useEffect(() => {
	// 	if (buttonWidth > 0) {
	// 		tabPositionX.value = withSpring(buttonWidth * state.index, {
	// 			damping: 20,
	// 		});
	// 	}
	// }, [buttonWidth, state.index]);

	// const onTabbarLayout = (e: LayoutChangeEvent) => {
	// 	const { width, height } = e.nativeEvent.layout;
	// 	console.log("Navbar width:", width);
	// 	console.log("Navbar height:", height);

	// 	setDimensions({ height, width });
	// };

	// const tabPositionX = useSharedValue(0);

	// const animatedStyle = useAnimatedStyle(() => {
	// 	return {
	// 		transform: [{ translateX: tabPositionX.value }],
	// 	};
	// });

	return (
		<View
			// onLayout={onTabbarLayout}
			className="absolute min-h-[70px] bottom-14 flex-row bg-secondary justify-between items-center mx-7 rounded-[50px] shadow-lg border border-primary-dark"
		>
			{/* <Animated.View
				className="absolute bg-primary-light rounded-full z-10 w-full h-full left-0"
				style={animatedStyle}
			/> */}
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
						label={label as string}
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
