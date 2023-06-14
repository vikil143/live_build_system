import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../utility/Colors';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

export default function Button({text, onPress}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container]}>
        <Text style={[styles.buttonText]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
  },
  container: {
    padding: 15,
    backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
