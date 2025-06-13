import { icons } from "@/constants/icons";
import React from "react";
import { Image, ImageSourcePropType, TextInput, View } from "react-native";

const SearchBar = () => {
	return (
		<View className="flex bg-white w-full h-14 justify-center items-center mt-4 rounded-[10px] shadow-sm">
			<View className="flex flex-row items-center justify-between w-full px-3">
				<TextInput
					className="flex-1 text-xl text-black h-full py-0 justify-center"
					placeholder="Cerca un brano..."
					placeholderTextColor="#897C80"
				/>
				<Image
					source={icons.searchLens as ImageSourcePropType}
					className="w-5 h-5 ml-2"
					resizeMode="contain"
				/>
			</View>
		</View>
	);
};

export default SearchBar;
