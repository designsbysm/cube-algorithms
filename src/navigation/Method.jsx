import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Algorithm from '../screens/Algorithm';
import Drawer from './Drawer';

const MethpdNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Drawer}
        name='method'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Algorithm}
        name='algorithm'
      />
    </Stack.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export default MethpdNavigation;
