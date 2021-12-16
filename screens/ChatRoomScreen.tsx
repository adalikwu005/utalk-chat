import React, { Component } from "react";
import { Text, View as SafeAreaView } from "../components/Themed";
import { FlatList, StyleSheet } from "react-native";
import Message from "../components/Message";
import chatRoomData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput/MessageInput";

export default class ChatRoomScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.page}>
        <FlatList
          data={chatRoomData.messages}
          renderItem={({ item }) => <Message message={item} />}
          inverted
        />
        <MessageInput />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
