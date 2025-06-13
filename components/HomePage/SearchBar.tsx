import { icons } from "@/constants/icons";
import React, { useState } from "react";
import { Image, ImageSourcePropType, TextInput, View } from "react-native";
import SearchBarButton from "../SearchBarList";

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<View>
			<View className="flex bg-white w-full h-14 justify-center items-center mt-4 rounded-[10px] shadow-sm">
				<View className="flex flex-row items-center justify-between w-full px-3">
					<TextInput
						className="flex-1 text-xl text-defaultText h-full justify-center"
						placeholder="Cerca un brano..."
						placeholderTextColor="#897C80"
						onChangeText={(text) => setSearchQuery(text)}
						value={searchQuery}
						autoCorrect={false}
						spellCheck={false}
						selectionColor={"#897C80"}
					/>
					<Image
						source={icons.searchLens as ImageSourcePropType}
						className="w-5 h-5 ml-2"
						resizeMode="contain"
					/>
				</View>
			</View>
			{searchQuery.length >= 3 && (
				<View className="flex flex-col items-center justify-center bg-white rounded-[10px] h-full max-h-[60%] mt-4 p-2 shadow-sm">
					<SearchBarButton />
				</View>
			)}
		</View>
	);
};

export default SearchBar;
