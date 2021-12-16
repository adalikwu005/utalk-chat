import React, { Component } from "react";
import { Text, View } from "../components/Themed";
import { FlatList, StyleSheet } from "react-native";
import Message from "../components/Message";
import chatRoomData from "../assets/dummy-data/Chats";

export default class ChatRoomScreen extends Component {
  render() {
    return (
      <View style={styles.page}>
        <FlatList
          data={chatRoomData.messages}
          renderItem={({ item }) => <Message message={item} />}
          inverted
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
