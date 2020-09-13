import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

export default function ShoppingList() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const addButtonPressed = () => {
    setItems([...items, { key: item }]);
  };

  const clearButtonPressed = () => {
    setItems([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={item => {
          setItem(item);
        }}
      />
      <View style={styles.buttons}>
        <Button onPress={addButtonPressed} title="Add" />
        <Button onPress={clearButtonPressed} title="Clear" />
      </View>
      <View style={styles.shoppinglist}>
        <Text> Shopping List</Text>
        <FlatList
          data={items}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 200,
  },
  buttons: {
    flexDirection: "row",
    backgroundColor: "black",
  },
  textInput: {
    textAlign: "center",
    height: 40,
    width: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 20,
    marginTop: 20,
  },
  shoppinglist: {
    alignItems: "center",
    justifyContent: "center",
  },
});
