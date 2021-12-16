import React from "react";
import { Text, View } from "../Themed";
import { Image } from "react-native";
import styles from "./styles";

export default function ChatRoomItem() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/57404619?v=4",
        }}
        style={styles.image}
      />
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>4</Text>
      </View>
      <View style={styles.rightcontainer}>
        <View style={styles.row}>
          <Text style={styles.name}>Michael Adalikwu</Text>
          <Text style={styles.text}>11:11 AM</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          Hello from Michael
        </Text>
      </View>
    </View>
  );
}
