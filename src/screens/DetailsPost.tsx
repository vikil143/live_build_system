import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useFetchedData} from '../hooks/useFetchedData';
import {endPoints} from '../utility/endPoints';
import {MyNavigationProps} from '../router/types';
import {CommentData} from '../types';
import Loader from '../components/Loader';
import {Colors} from '../utility/Colors';
import Header from '../components/Header';
import PostTextItem from '../components/PostTextItem';

interface Props extends MyNavigationProps<'DetailsPost'> {}

export default function DetailsPostScreen({route, navigation}: Props) {
  const {id, title, body, userId, color} = route.params;
  const {list, loader} = useFetchedData<CommentData>(
    endPoints.detailsPost.concat(id + '/comments'),
  );

  const onGoBack = () => navigation.goBack();
  return (
    <View style={[styles.container, {backgroundColor: Colors.black}]}>
      <Header onGoBack={onGoBack} />
      <View style={[styles.body, {backgroundColor: color}]}>
        <PostTextItem
          text={title}
          containerStyle={styles.titleContainer}
          textStyle={styles.titleText}
        />
        <PostTextItem
          text={body}
          containerStyle={styles.bodyContainer}
          textStyle={styles.bodyText}
        />
      </View>
      <FlatList
        data={list}
        renderItem={({item, index}) => {
          return (
            <View style={[styles.commentContainer]}>
              <Text style={[styles.white]}>{item.name}</Text>
              <Text style={[styles.white]}>{item.body}</Text>
            </View>
          );
        }}
      />
      <Loader show={loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  white: {
    color: Colors.white,
  },
  commentContainer: {
    borderColor: Colors.white,
    borderWidth: 1,
  },
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
  body: {},
  container: {
    flex: 1,
  },
});
