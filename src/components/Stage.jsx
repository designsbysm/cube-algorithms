import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Cases from './Cases';

const StageComponent = ({ cases, name, notes }) => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{notes}</Text>
      <Cases cases={cases} />
    </View>
  );
};

const createStyles = () => StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default StageComponent;
