import IndexPreview from "@/components/HomePage/IndexPreview";
import LastSeen from "@/components/HomePage/LastSeen";
import PreferitiPreview from "@/components/HomePage/PreferitiPreview";
import SearchBar from "@/components/HomePage/SearchBar";
import TopMoth from "@/components/HomePage/TopMoth";
import "@/global.css";
import { SafeAreaView, View } from "react-native";

export default function Index() {
	return (
		<SafeAreaView className="flex flex-col items-center justify-center size-full bg-primary-dark">
			<SearchBar />
			<LastSeen />
			<View className="flex flex-row items-center justify-between">
				<IndexPreview />
				<View className="flex flex-col items-center justify-center">
					<PreferitiPreview />
					<TopMoth />
				</View>
			</View>
		</SafeAreaView>
	);
}
