import IndexPreview from "@/components/HomePage/IndexPreview";
import LastSeen from "@/components/HomePage/LastSeen";
import PreferitiPreview from "@/components/HomePage/PreferitiPreview";
import SearchBar from "@/components/HomePage/SearchBar";
import TopMoth from "@/components/HomePage/TopMoth";
import "@/global.css";
import { SafeAreaView, StatusBar, View } from "react-native";

export default function Index() {
	
	return (
		<SafeAreaView className="flex flex-col items-center justify-center size-full bg-primary-dark">
			<StatusBar barStyle={'default'}/>
			<View className="size-full px-7 gap-8 pb-9">
				<SearchBar />
				<LastSeen />
				<View className="flex flex-row items-center justify-between gap-6 flex-1">
					<IndexPreview />
					<View className="flex flex-1 w-full flex-col items-center justify-center gap-8">
						<PreferitiPreview />
						<TopMoth />
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}
