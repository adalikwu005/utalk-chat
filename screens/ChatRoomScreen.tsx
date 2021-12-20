import React, { Component } from "react";
import { Text, View as SafeAreaView } from "../components/Themed";
import { FlatList, StyleSheet } from "react-native";
import Message from "../components/Message";
import chatRoomData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput/MessageInput";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ChatRoomScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  console.log("Displaying Chat room", route.params?.id);

  navigation.setOptions({ title: "Adalikwu Michael" });

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

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
