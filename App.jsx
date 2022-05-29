import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FourLLL from './src/methods/3x3/4lll';
import Intermediate from './src/methods/2x2/intermediate';
import Method from './src/screens/Method';
import Notations from './src/methods/3x3/notations';
import Ortega from './src/methods/2x2/ortega';
import Roux from './src/methods/3x3/roux';

const App = () => {
  const styles = createStyles();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <NavigationContainer>
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
          <Drawer.Screen
            component={Method}
            initialParams={{ method: Notations }}
            name='notations'
            options={{
              title: '3x3 Notations',
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const Drawer = createDrawerNavigator();

const createStyles = () => StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
