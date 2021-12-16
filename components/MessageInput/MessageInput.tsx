import React, { useState } from "react";
import { Text, View } from "../Themed";
import { StyleSheet, TextInput, Pressable } from "react-native";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.warn("Sending Message", message);
    setMessage("");
  };

  const onPlusClicked = () => {
    console.warn("On plus clicked");
  };

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <SimpleLineIcons name="emotsmile" size={24} style={styles.icon} />
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Utalk message..."
        />
        <Feather name="camera" size={24} style={styles.icon} />
        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          style={styles.icon}
        />
      </View>
      <Pressable style={styles.buttonContainer} onPress={onPress}>
        {message ? (
          <Ionicons name="send" size={24} color={"white"} />
        ) : (
          <AntDesign name="plus" size={24} color={"white"} />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding: 5,
  },
  inputContainer: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    flexDirection: "row",
    marginRight: 10,
    borderRadius: 25,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#dedede",
    padding: 10,
  },
  buttonContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#3872E9",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 5,
    color: "#595959",
  },
  buttonText: {
    color: "white",
    fontSize: 35,
  },
});

export default MessageInput;
