import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FourLLL from '../methods/3x3/4lll';
import Intermediate from '../methods/2x2/intermediate';
import Method from '../screens/Method';
import Ortega from '../methods/2x2/ortega';
import Roux from '../methods/3x3/roux';

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName='roux'>
      <Drawer.Screen
        component={Method}
        initialParams={{ method: Intermediate }}
        name='intermediate'
        options={{
          title: '2x2 Intermediate',
        }}
      />
      <Drawer.Screen
        component={Method}
        initialParams={{ method: Ortega }}
        name='ortega'
        options={{
          title: '2x2 Ortega',
        }}
      />
      <Drawer.Screen
        component={Method}
        initialParams={{ method: Roux }}
        name='roux'
        options={{
          title: '3x3 Roux',
        }}
      />
      <Drawer.Screen
        component={Method}
        initialParams={{ method: FourLLL }}
        name='4lll'
        options={{
          title: '3x3 4LLL',
        }}
      />
    </Drawer.Navigator>
  );
};

const Drawer = createDrawerNavigator();

export default DrawerNavigation;
