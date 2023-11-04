import { Text, View, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

export default function PrimaryButton({ children, onPress, disabled }) {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				onPress={disabled ? () => {} : onPress}
				android_ripple={{
					color: disabled ? "gray" : GlobalStyles.colors.primary,
				}}
				style={({ pressed }) =>
					pressed && !disabled
						? [styles.buttonInnerContainer, styles.pressed]
						: disabled
						? styles.buttonDisableInnerContainer
						: styles.buttonInnerContainer
				}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: "hidden",
	},
	buttonInnerContainer: {
		backgroundColor: GlobalStyles.colors.primary,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 4,
	},
	buttonDisableInnerContainer: {
		backgroundColor: "gray",
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 4,
	},
	buttonText: {
		color: "#fff",
		textAlign: "center",
	},
	pressed: {
		opacity: 0.75,
	},
});
