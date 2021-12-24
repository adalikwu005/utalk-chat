import { Feather } from "@expo/vector-icons";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  ColorSchemeName,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";

import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import HomeScreen from "../screens/HomeScreen";
import UsersScreen from "../screens/UsersScreen";

import ChatRoomScreen from "../screens/ChatRoomScreen";

import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { Text, View } from "../components/Themed";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: HomeHeader }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{
          headerTitle: ChatRoomHeader,
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="UsersScreen"
        component={UsersScreen}
        options={{
          title: "Users",
        }}
      />

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const HomeHeader = (props) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width,
        padding: 10,
        paddingRight: 20,
      }}
    >
      <Image
        style={{ width: 30, height: 30, borderRadius: 30 }}
        source={{ uri: "https://avatars.githubusercontent.com/u/57404619?v=4" }}
      />
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          marginLeft: 40,
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        Utalk
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Feather
          name="camera"
          size={24}
          color={"black"}
          style={{ marginHorizontal: 10, padding: 5 }}
        />

        <Pressable onPress={() => navigation.navigate("UsersScreen")}>
          <Feather
            name="edit-2"
            size={24}
            color={"black"}
            style={{ marginHorizontal: 10, padding: 5 }}
          />
        </Pressable>
      </View>
    </View>
  );
};

const ChatRoomHeader = (props) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width - 50,
        padding: 10,
        marginLeft: -30,
      }}
    >
      <Image
        style={{ width: 30, height: 30, borderRadius: 30, marginRight: 10 }}
        source={{ uri: "https://avatars.githubusercontent.com/u/57404619?v=4" }}
      />
      <Text
        style={{
          flex: 1,
          marginLeft: 0,
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        {props.children}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Feather
          name="camera"
          size={24}
          color={"black"}
          style={{ marginHorizontal: 5, padding: 5 }}
        />
        <Feather
          name="edit-2"
          size={24}
          color={"black"}
          style={{ marginHorizontal: 5, padding: 5 }}
        />
      </View>
    </View>
  );
};
