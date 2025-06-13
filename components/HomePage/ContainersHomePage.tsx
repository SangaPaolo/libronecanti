import React from "react";
import { View } from "react-native";
import TitleBoxes from "./TitleBoxes";

interface TitleBoxesProps {
	title: string;
}

const ContainersHomePage = ({ title }: TitleBoxesProps) => {
	return (
		<View className="flex-1 flex-col bg-white rounded-[10px] w-full h-full justify-start items-center p-4">
			<TitleBoxes title={title} />
		</View>
	);
};

export default ContainersHomePage;
