import { View, TextInput, Tedxt } from "react";

function Input({ label, textInputConfig }) {
  return (
    <View>
      <Text>{label}</Text>
      {/* <TextInput keyboardType={type} maxLength={maxLength} /> */}
      <TextInput {...textInputConfig} />
    </View>
  );
}

export default Input;
