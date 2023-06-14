/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import RootNavigator from './src/router/RootNavigator';
import {commonStyles} from './src/utility/commonStyles';
import Toast from 'react-native-toast-message';

function App(): JSX.Element {
  return (
    <SafeAreaView style={[commonStyles.flexOne]}>
      <View style={[commonStyles.flexOne]}>
        <RootNavigator />
      </View>
      <Toast />
    </SafeAreaView>
  );
}

export default App;
