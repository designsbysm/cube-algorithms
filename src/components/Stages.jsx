import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Stage from './Stage';

const StagesComponent = ({ method }) => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      {method.map(item => {
        return (
          <Stage
            key={item.name}
            {...item}
          />
        );
      })}
    </View>
  );
};

const createStyles = () => StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default StagesComponent;
