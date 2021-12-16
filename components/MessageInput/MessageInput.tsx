import React from "react";
import { Text, View } from "../Themed";
import { StyleSheet, TextInput } from "react-native";
import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const MessageInput = () => {
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <SimpleLineIcons name="emotsmile" size={24} style={styles.icon} />
        <TextInput placeholder="Utalk Here" style={styles.input} />
        <Feather name="camera" size={24} style={styles.icon} />
        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          style={styles.icon}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AntDesign name="plus" size={24} color={"white"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
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
