import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

import Method from './src/navigation/Method';

const App = () => {
  const styles = createStyles();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Method />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const createStyles = () => StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
