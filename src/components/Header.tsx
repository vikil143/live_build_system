import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import EIcon from 'react-native-vector-icons/Entypo';
import {Menu, MenuDivider, MenuItem} from 'react-native-material-menu';
import {Colors} from '../utility/Colors';
import {commonStyles} from '../utility/commonStyles';

interface HeaderProps {
  onGoBack?: () => void;
}

export default function Header({onGoBack}: HeaderProps) {
  const isBack = useRef(typeof onGoBack === 'function');
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  return (
    <>
      <View style={[styles.container]}>
        <View style={[commonStyles.flexOne]}>
          {isBack.current ? (
            <TouchableOpacity onPress={onGoBack}>
              <MIcon name="keyboard-backspace" size={35} />
            </TouchableOpacity>
          ) : (
            <Text style={[styles.logo]}>Logo</Text>
          )}
        </View>
        <View>{!isBack.current && <Icon name="user" size={35} />}</View>
        {/* <Spacing size={3} />
        <Menu
          visible={visible}
          anchor={
            <TouchableOpacity onPress={showMenu}>
              <EIcon name="dots-three-vertical" size={30} />
            </TouchableOpacity>
          }
          onRequestClose={hideMenu}>
          <MenuItem onPress={hideMenu}>Edit Post</MenuItem>
        </Menu> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 22,
    color: Colors.black,
    fontWeight: 'bold',
  },
  container: {
    padding: 12,
    backgroundColor: Colors.lightGrey,
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
  },
});
