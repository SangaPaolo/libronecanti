import React, { useEffect } from "react";
import { ImageSourcePropType, Pressable } from "react-native";
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";

const TabBarButton = ({
	onPress,
	onLongPress,
	isFocused,
	icon,
	label,
}: {
	onPress: Function;
	onLongPress: Function;
	isFocused: boolean;
	routeName: string;
	label: string;
	icon: ImageSourcePropType;
}) => {
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
            top
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
			className="flex-1 justify-center items-center gap-1 z-30"
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
