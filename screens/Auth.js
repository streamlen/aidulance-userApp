import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GlobalStyles } from "../constants/styles";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function Auth({ navigation }) {
	const [enteredPhone, setEnteredPhone] = useState("");
	const [enteredOTP, setEnteredOTP] = useState("");

	const [isSendOTPBtnEnable, setIsSendOTPBtnEnable] = useState(false);
	const [isVerifyOTPBtnEnable, setIsVerifyOTPBtnEnable] = useState(false);

	const handleSendOTP = () => {
		console.log("send otp clicked");
		setInterval(() => {
			console.log("tick");
		}, 1000);
	};
	const handleVerifyOTP = () => {
		console.log("verify otp clicked");
		navigation.navigate("AppOverView");
	};
	return (
		<LinearGradient
			colors={[GlobalStyles.colors.primary, GlobalStyles.colors.secondary]}
			style={styles.container}
		>
			<View style={styles.drawer}>
				<View style={styles.manualAuth}>
					<View style={styles.phoneInputContainer}>
						<View style={{ gap: 5 }}>
							<Text style={styles.phoneLabel}>Phone no.</Text>
							<TextInput
								maxLength={10}
								style={styles.phoneInput}
								keyboardType="number-pad"
								value={enteredPhone}
								onChangeText={(phoneText) => {
									setEnteredPhone(phoneText);
									if (phoneText.length === 10) setIsSendOTPBtnEnable(true);
									else setIsSendOTPBtnEnable(false);
								}}
							></TextInput>
						</View>
						<PrimaryButton
							disabled={!isSendOTPBtnEnable}
							onPress={handleSendOTP}
						>
							Send OTP
						</PrimaryButton>
					</View>
					<View style={styles.OtpInputContainer}>
						<View style={{ gap: 5 }}>
							<Text style={styles.OtpLabel}>OTP</Text>
							<TextInput
								maxLength={4}
								style={styles.OtpInput}
								keyboardType="number-pad"
								value={enteredOTP}
								onChangeText={(otpText) => {
									setEnteredOTP(otpText);
									if (otpText.length === 4) setIsVerifyOTPBtnEnable(true);
									else setIsVerifyOTPBtnEnable(false);
								}}
							></TextInput>
						</View>
						<PrimaryButton
							disabled={!isVerifyOTPBtnEnable}
							onPress={handleVerifyOTP}
						>
							Verify OTP
						</PrimaryButton>
					</View>
				</View>
				<View style={styles.oauth}>
					<Text style={styles.orText}>OR</Text>
					<View style={styles.logoContainer}>
						<Ionicons style={styles.logo} name="logo-apple" size={40} />
						<Ionicons style={styles.logo} name="logo-google" size={40} />
					</View>
				</View>
			</View>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
	},
	drawer: {
		height: "70%",
		backgroundColor: "white",
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		overflow: "hidden",
		paddingHorizontal: 30,
		paddingVertical: 40,
		alignItems: "center",
		justifyContent: "space-between",
	},
	phoneInput: {
		borderWidth: 1,
		borderColor: "gray",
		paddingHorizontal: 10,
		borderRadius: 10,
		fontSize: 24,
		width: 200,
		textAlign: "center",
	},
	phoneInputContainer: {
		gap: 5,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
	},
	OtpInput: {
		borderWidth: 1,
		borderColor: "gray",
		paddingHorizontal: 10,
		borderRadius: 10,
		fontSize: 24,
		width: 100,
		textAlign: "center",
	},
	OtpInputContainer: {
		flexDirection: "row",
		gap: 5,
		justifyContent: "space-between",
		alignItems: "flex-end",
	},
	manualAuth: {
		gap: 30,
	},
	orText: {
		fontSize: 20,
		fontWeight: "bold",
	},
	logoContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-evenly",
	},
	logo: {},
	oauth: {
		alignItems: "center",
		gap: 25,
	},
});
