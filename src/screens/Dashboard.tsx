import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import {commonStyles} from '../utility/commonStyles';
import {useFetchedData} from '../hooks/useFetchedData';
import {endPoints} from '../utility/endPoints';
import Post from '../components/Post';
import {MyNavigationProps} from '../router/types';
import {PostData} from '../types';
import {Colors} from '../utility/Colors';
import Header from '../components/Header';
import Loader from '../components/Loader';
import DashboardContent from '../components/DashboardContent';

interface Props extends MyNavigationProps<'Dashboard'> {}

export default function DashboardScreen({navigation}: Props) {
  const {list, loader} = useFetchedData<PostData>(endPoints.listPosts);

  const goToAddPost = () => navigation.navigate('AddPost');

  return (
    <View style={[styles.container]}>
      <Header />
      <DashboardContent onPress={goToAddPost} />
      <FlatList
        data={list}
        renderItem={({item, index}) => <Post {...{navigation, item, index}} />}
      />
      <Loader show={loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});
