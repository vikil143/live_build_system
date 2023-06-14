import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {PostData} from '../types';

interface DetailsPostParams extends PostData {
  color: string;
}

export type NavigationKeys = {
  Dashboard: undefined;
  DetailsPost: DetailsPostParams;
  AddPost: undefined;
};

export type MyNavigationProps<T extends keyof NavigationKeys> =
  StackScreenProps<NavigationKeys, T>;

export type SingleNavigationProp<T extends keyof NavigationKeys> = {
  navigation: StackNavigationProp<NavigationKeys, T>;
};
