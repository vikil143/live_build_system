import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import React, {useRef} from 'react';
import {PostData} from '../types';
import {commonStyles} from '../utility/commonStyles';
import {Colors, PostColors} from '../utility/Colors';
import {SingleNavigationProp} from '../router/types';
import PostTextItem from './PostTextItem';

interface PostItemProps extends SingleNavigationProp<'Dashboard'> {
  item: PostData;
  index: number;
}

const randomNumber = (): number => Math.ceil(Math.random() * (10 - 1) + 1);

export default function Post({item, navigation}: PostItemProps) {
  let specificInt = useRef(randomNumber());
  const onPress = () =>
    navigation.navigate('DetailsPost', {
      ...item,
      color: PostColors[specificInt.current - 1],
    });
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: PostColors[specificInt.current - 1],
          },
          commonStyles.shadowNormal,
        ]}>
        <PostTextItem
          text={item.title}
          containerStyle={styles.titleContainer}
          textStyle={styles.titleText}
        />
        <PostTextItem
          text={item.body}
          containerStyle={styles.bodyContainer}
          textStyle={styles.bodyText}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  bodyText: {
    color: Colors.white,
    fontSize: 16,
  },
  titleText: {
    color: Colors.white,
    fontSize: 20,
  },
  bodyContainer: {
    padding: 5,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  titleContainer: {
    padding: 5,
    paddingHorizontal: 10,
  },
  container: {
    marginVertical: 5,
  },
});
