import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="(tabs)"
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="canzone/[id]"
				options={{
					title: "Canzone",
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
