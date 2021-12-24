import * as React from "react";
import { View } from "../components/Themed";
import { StyleSheet, FlatList, Text, Pressable } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";
import ChatRoomsData from "../assets/dummy-data/ChatRooms";
import { Auth } from "aws-amplify";

export default function HomeScreen() {
  const logOut = () => {
    Auth.signOut();
  };

  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />

      {/* <Pressable
        onPress={logOut}
        style={{
          backgroundColor: "orange",
          height: 50,
          margin: 10,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Logout</Text>
      </Pressable> */}
    </View>
  );
}
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
