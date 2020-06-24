import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListImagesScreen, {
  ScreenOptions as ListScreenOptions,
} from '../screen/ListImagesScreen';
import ImageScreen, {
  ScreenOptions as ImageScreenOptions,
} from '../screen/ImageScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ImageList"
        component={ListImagesScreen}
        options={ListScreenOptions}
      />
      <Stack.Screen
        name="ImageScreen"
        component={ImageScreen}
        options={ImageScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
