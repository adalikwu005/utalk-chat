import React, { useEffect, useState } from "react";
import { View } from "../components/Themed";
import { StyleSheet, FlatList } from "react-native";
import UserItem from "../components/UserItem";
import { DataStore } from "aws-amplify";
import { User } from "../src/models";

export default function UsersScreen() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    //querry users
    const fetchUsers = async () => {
      const fetchedUsers = await DataStore.query(User);
      setUsers(fetchedUsers);
    };
    fetchUsers();
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserItem user={item} />}
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
