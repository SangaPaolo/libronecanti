import React from "react";
import { Text, View } from "react-native";

interface TitleBoxesProps {
	title: string;
}

const TitleBoxes = ({ title }: TitleBoxesProps) => {
	return (
		<View>
			<Text className="font-thin text-3xl">{title}</Text>
		</View>
	);
};

export default TitleBoxes;
