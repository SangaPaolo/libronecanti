import React from "react";
import { View } from "react-native";
import TitleBoxes from "./TitleBoxes";

const LastSeen = () => {
	return (
		<View className="flex-1 flex-col bg-white rounded-[10px] w-full max-h-[170px] justify-start items-center p-4">
			<TitleBoxes title="Ultimo brano visualizzato" />
		</View>
	);
};

export default LastSeen;
