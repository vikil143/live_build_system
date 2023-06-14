import {StyleSheet, Text, View, Modal, ActivityIndicator} from 'react-native';
import React from 'react';
import {Colors} from '../utility/Colors';
import {commonStyles} from '../utility/commonStyles';

interface LoaderProps {
  show: boolean;
}

export default function Loader({show}: LoaderProps) {
  return (
    <Modal visible={show} transparent>
      <View style={[commonStyles.flexOne, commonStyles.center]}>
        <View style={[styles.box]}>
          <ActivityIndicator color={Colors.black} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 65,
    height: 65,
    backgroundColor: Colors.white,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
