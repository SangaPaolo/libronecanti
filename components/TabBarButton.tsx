import React, { useEffect } from "react";
import { Pressable } from "react-native";
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";

interface TabBarButtonProps {
	routeName: string;
	onPress: () => void;
	onLongPress: () => void;
	isFocused: boolean;
	label: string;
	icon: string;
}

const TabBarButton = ({
	onPress,
	onLongPress,
	isFocused,
	icon,
	label,
}: TabBarButtonProps) => {
	const scale = useSharedValue(0);

	useEffect(() => {
		scale.value = withSpring(
			typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
			{ duration: 350 }
		);
	}, [scale, isFocused]);

	const animatedIconStyle = useAnimatedStyle(() => {
		const scaleValue = interpolate(scale.value, [0, 1], [1, 1.8]);
		const top = interpolate(scale.value, [0, 1], [0, 9]);

		return {
			transform: [{ scale: scaleValue }],
			top,
		};
	});

	const animatedTextStyle = useAnimatedStyle(() => {
		const opacity = interpolate(scale.value, [0, 1], [1, 0]);

		return {
			opacity,
		};
	});

	return (
		<Pressable
			onPress={onPress}
			onLongPress={onLongPress}
			className="flex-1 flex-col justify-center items-center gap-1 z-30"
		>
			<Animated.Image
				style={animatedIconStyle}
				source={icon}
				className="w-6 h-6"
				resizeMode="contain"
			/>
			<Animated.Text
				style={animatedTextStyle}
				className="font-extralight text-xs"
			>
				{label}
			</Animated.Text>
		</Pressable>
	);
};

export default TabBarButton;
