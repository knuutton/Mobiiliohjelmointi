import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

export default function NumberGuessing() {
  const [guess, setGuess] = useState(0);
  const [secretNumber, setSecretNumber] = useState(0);
  const [guesses, setGuesses] = useState(0);
  const [info, setInfo] = useState("");

  const start = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setInfo("Guess a number between 1 - 100");
    setGuess(0);
  };

  const check = () => {
    setGuesses(guesses + 1);
    if (guess > secretNumber) {
      setInfo("Your guess " + guess + " is too big.");
    } else if (guess < secretNumber) {
      setInfo("Your guess " + guess + " is too low.");
    } else {
      Alert.alert(
        "Correct! You guessed the correct number in " +
          (guesses + 1) +
          " guesses."
      );
      start();
    }
  };

  useEffect(() => {
    start();
  }, []);

  return (
    <View style={styles.container}>
      <Text> {info}</Text>
      <TextInput
        style={styles.textInput}
        keyboardType={"numeric"}
        onChangeText={guess => setGuess(guess)}
      />
      <Button onPress={check} style={styles.button} title="Make a Guess" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
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
});
