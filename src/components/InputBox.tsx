import {StyleSheet, View, TextInput, TextInputProps} from 'react-native';
import React from 'react';
import {Colors} from '../utility/Colors';

interface InputBoxProps extends TextInputProps {
  name: string;
  onChangeValue: (name: string, value: string) => void;
}

export default function InputBox({
  name,
  onChangeValue,
  style,
  ...props
}: InputBoxProps) {
  return (
    <View style={[styles.container]}>
      <TextInput
        {...props}
        style={[styles.textInput, style]}
        onChangeText={text => onChangeValue(name, text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {},
  container: {
    backgroundColor: Colors.lightGrey,
    padding: 8,
  },
});
