import {StyleSheet, Text, View, ViewStyle, TextStyle} from 'react-native';
import React from 'react';
import {Colors} from '../utility/Colors';

interface PostTextItemProps {
  text: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export default function PostTextItem({
  text,
  containerStyle,
  textStyle,
}: PostTextItemProps) {
  return (
    <View style={[styles.titleContainer, containerStyle]}>
      <Text style={[styles.titleText, textStyle]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    color: Colors.white,
    fontSize: 20,
  },
  titleContainer: {
    padding: 5,
    paddingHorizontal: 10,
  },
});
