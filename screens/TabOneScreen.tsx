import * as React from "react";
import { View } from "../components/Themed";
import { StyleSheet, FlatList } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";
import ChatRoomsData from "../assets/dummy-data/ChatRooms";

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
