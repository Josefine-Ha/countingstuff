import { useState } from "react";
import { View, TextInput, Alert } from "react-native";

import { CountableButton } from "./CountableButton";
import { CommonStyles } from "../styles/CommonStyles";
import { addCountable } from "../storage/CountableStorage";

export const AddRow = ({ addNewCountable }) => {
  const [name, setName] = useState("");

  // Function to handle the submission of the new countable name
  const handleSubmit = async () => {
    const newCountable = {
      name: name,
      count: 0,
    };
    await addCountable(newCountable);
    if (name.trim() === "") {
      Alert.alert("Error", "Name cannot be empty");
      return;
    }
    // Regex to check if the name contains only letters 
    if (!/^[A-Za-zÅÄÖåäö\s]+$/.test(name)) {
      Alert.alert("Error, name can only contain letters", "Please enter a valid name");
      return;
    }
    addNewCountable(name);
    setName(""); // Clear the input field after adding
  }
  return (
    <View style={CommonStyles.row}>
      <TextInput
        placeholder="Enter name"
        onChangeText={setName}
        style={CommonStyles.input}
      />
      <CountableButton
        label="Add"
        submit={handleSubmit}
      />
    </View>
  );
};
