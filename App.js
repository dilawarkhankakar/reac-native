import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import RoomsScreen from "./screens/RoomsScreen";
import RoomDetailsScreen from "./screens/RoomDetailsScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Rooms">
          <Stack.Screen
            name="Rooms"
            component={RoomsScreen}
            options={{ title: "All Rooms" }}
          />
          <Stack.Screen name="RoomDetails" component={RoomDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
