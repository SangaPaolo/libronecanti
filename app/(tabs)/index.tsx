import IndexPreview from "@/components/HomePage/IndexPreview";
import LastSeen from "@/components/HomePage/LastSeen";
import PreferitiPreview from "@/components/HomePage/PreferitiPreview";
import SearchBar from "@/components/HomePage/SearchBar";
import TopMoth from "@/components/HomePage/TopMoth";
import "@/global.css";
import {
	SafeAreaView,
	StatusBar,
	View
} from "react-native";

export default function Index() {
	return (
		<SafeAreaView className="flex items-center justify-center size-full bg-primary-dark">
			<StatusBar barStyle={"default"} />
			<View className="flex-col size-full px-7 gap-6 pb-9">
				<SearchBar />
				<LastSeen />
				<View className="flex flex-row items-center justify-between gap-6 flex-1">
					<IndexPreview />
					<View className="flex flex-1 w-full flex-col items-center justify-center gap-6">
						<PreferitiPreview />
						<TopMoth />
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}
