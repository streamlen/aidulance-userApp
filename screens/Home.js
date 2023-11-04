import { StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GlobalStyles } from "../constants/styles";

export default function Home() {
	return (
		<LinearGradient
			colors={[
				GlobalStyles.colors.secondary,
				GlobalStyles.colors.primary,
				"white",
			]}
			locations={[0, 0.1, 0.25]}
			style={styles.rootContainer}
		>
			<View style={styles.locationInputRootContainer}>
				<View style={styles.locationLabelContainer}>
					<Text>From</Text>
					<Text>To</Text>
				</View>
				<View style={styles.locationInputContainer}>
					<TextInput
						style={styles.inputLocationText}
						placeholder="Current Location"
					/>
					<TextInput
						style={styles.inputLocationText}
						placeholder="Current Location"
					/>
				</View>
			</View>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginTop: 30,
		padding: 20,
	},
	locationInputRootContainer: {
		backgroundColor: "white",
		paddingVertical: 15,
		paddingHorizontal: 15,
		borderRadius: 20,
		flexDirection: "row",
		alignItems: "center",
		gap: 20,
		borderWidth: 2,
		borderTopColor: GlobalStyles.colors.primary,
		borderBottomColor: GlobalStyles.colors.secondary,
		borderRightColor: GlobalStyles.colors.primary,
		borderLeftColor: GlobalStyles.colors.secondary,
	},
	locationInputContainer: {
		gap: 10,
	},
	inputLocationText: {
		color: "black",
		fontSize: 20,
	},
	locationLabelContainer: {
		alignItems: "center",
		gap: 15,
	},
});
