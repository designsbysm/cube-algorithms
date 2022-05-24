import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import Stage from './Stage';

const StagesComponent = ({ method }) => {
  const styles = createStyles();

  return (
    <ScrollView style={styles.container}>
      {method.map(item => {
        return (
          <Stage
            key={item.name}
            {...item}
          />
        );
      })}
    </ScrollView>
  );
};

const createStyles = () => StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    // flex: 1,
    padding: 15,
  },
});

export default StagesComponent;
