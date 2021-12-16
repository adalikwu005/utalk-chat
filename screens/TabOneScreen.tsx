import * as React from "react";
import { View } from "../components/Themed";
import { StyleSheet } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <ChatRoomItem />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
