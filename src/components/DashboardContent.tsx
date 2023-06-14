import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {Colors} from '../utility/Colors';

interface DashboardContentProps {
  onPress: () => void;
}

export default function DashboardContent({onPress}: DashboardContentProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container]}>
        <Text>Add Post</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGrey,
    marginTop: 5,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
