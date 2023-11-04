import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import Services from "./screens/Services";
import { GlobalStyles } from "./constants/styles";
import Auth from "./screens/Auth";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();
const BottomsTabs = createBottomTabNavigator();

const AppOverview = () => {
	return (
		<BottomsTabs.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: "white",
					borderTopLeftRadius: 50,
					borderTopRightRadius: 50,
					overflow: "hidden",
					paddingVertical: 10,
					height: 70,
					paddingBottom: 10,
				},
			}}
		>
			<BottomsTabs.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<View>
							<Ionicons
								name="home"
								size={20}
								color={focused ? GlobalStyles.colors.primary : "gray"}
							/>
						</View>
					),
					tabBarLabel: ({ focused }) => (
						<Text
							style={{
								color: focused ? "black" : "gray",
								fontWeight: focused ? "bold" : "300",
							}}
						>
							Home
						</Text>
					),
				}}
			/>
			<BottomsTabs.Screen
				name="Services"
				component={Services}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<View>
							<Ionicons
								name="basket"
								size={20}
								color={focused ? GlobalStyles.colors.primary : "gray"}
							/>
						</View>
					),
					tabBarLabel: ({ focused }) => (
						<Text
							style={{
								color: focused ? "black" : "gray",
								fontWeight: focused ? "bold" : "300",
							}}
						>
							Services
						</Text>
					),
				}}
			/>
			<BottomsTabs.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<View>
							<Ionicons
								name="person"
								size={20}
								color={focused ? GlobalStyles.colors.primary : "gray"}
							/>
						</View>
					),
					tabBarLabel: ({ focused }) => (
						<Text
							style={{
								color: focused ? "black" : "gray",
								fontWeight: focused ? "bold" : "300",
							}}
						>
							Profile
						</Text>
					),
				}}
			/>
		</BottomsTabs.Navigator>
	);
};

export default function App() {
	return (
		<>
			<StatusBar style="dark" />

			<SafeAreaProvider style={{ flex: 1 }}>
				<NavigationContainer>
					<Stack.Navigator screenOptions={{ headerShown: false }}>
						<Stack.Screen name="AppOverView" component={AppOverview} />
						<Stack.Screen name="Auth" component={Auth} />
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</>
	);
}
