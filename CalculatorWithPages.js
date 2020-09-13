import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  FlatList,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function MultipageCalculator() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Calculator' component={Calculator} />
            <Tab.Screen name='History' component={History} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

function Calculator () {
    const [numA, setNumA] = useState(0);
    const [numB, setNumB] = useState(0);
    const [result, setResult] = useState(0);
    const [history, setHistory] = useState([]);
  
    const plusButtonPressed = () => {
      const sum = parseFloat(numA) + parseFloat(numB);
      const item = numA + " + " + numB + " = " + result;
      setResult(sum);
      setHistory([...history, { key: item }]);
    };
  
    const minusButtonPressed = () => {
      const minus = parseFloat(numA) - parseFloat(numB);
      const item = numA + " - " + numB + " = " + result;
      setResult(minus);
      setHistory([...history, { key: item }]);
    };

    return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text>Result: {result}</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.textInput}
          onChangeText={numA => setNumA(numA)}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.textInput}
          onChangeText={numB => setNumB(numB)}
        />
      </View>
      <View style={styles.buttons}>
        <Button onPress={plusButtonPressed} title="+" />
        <Button onPress={minusButtonPressed} title="-" />
      </View>
    </View>
    );
}

function History () {
    return (
        <View style={styles.history}>
        <Text>History:</Text>
        <FlatList
          data={history}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    width: 100,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  history: {
    alignItems: "center",
  },
});
