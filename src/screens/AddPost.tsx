import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../utility/Colors';
import Header from '../components/Header';
import {MyNavigationProps} from '../router/types';
import InputBox from '../components/InputBox';
import Spacing from '../components/Spacing';
import Button from '../components/Button';
import {showToast} from '../utility/helpers';
import makeRequest from '../utility/makeRequest';
import {endPoints} from '../utility/endPoints';

interface AddPostScreenProps extends MyNavigationProps<'AddPost'> {}

export default function AddPostScreen({navigation}: AddPostScreenProps) {
  const [state, setState] = useState({
    title: '',
    body: '',
  });
  const [loader, setLoader] = useState(false);

  const goBack = () => navigation.goBack();

  const onChangeValue = (name: string, text: string) =>
    setState({
      ...state,
      [name]: text,
    });

  const handleValidate = () => {
    if (state.title.trim() === '') {
      showToast({
        text1: 'Required field',
        text2: 'Please enter title',
        type: 'error',
      });
      return false;
    }

    if (state.body.trim() === '') {
      showToast({
        text1: 'Required field',
        text2: 'Please enter body',
        type: 'error',
      });
      return false;
    }

    return true;
  };

  const onSubmit = async () => {
    const isValide = handleValidate();
    if (isValide) {
      try {
        setLoader(true);
        const formData = {
          title: state.title,
          body: state.body,
          userId: 1,
        };

        const response = await makeRequest({
          url: endPoints.addPost,
          method: 'POST',
          data: formData,
        });

        console.log('response data', response.data);
        showToast({
          text1: 'Success',
          text2: 'Successfully added post',
          type: 'success',
        });
        navigation.push('Dashboard');
      } catch (error) {
      } finally {
        setLoader(false);
      }
    }
  };

  return (
    <View style={[styles.container]}>
      <Header onGoBack={goBack} />
      <Spacing />
      <InputBox
        name="title"
        value={state.title}
        placeholder="Please enter title"
        onChangeValue={onChangeValue}
      />
      <Spacing />
      <InputBox
        name="body"
        value={state.body}
        placeholder="Please enter body"
        multiline
        textAlignVertical="top"
        numberOfLines={5}
        onChangeValue={onChangeValue}
      />
      <Spacing />
      <Button text="Submit" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});
