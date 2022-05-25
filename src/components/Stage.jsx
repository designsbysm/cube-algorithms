import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Cases from './Cases';

const StageComponent = ({ cases, isLast, name, notes }) => {
  const styles = createStyles();

  return (
    <View style={[
      styles.container,
      isLast && styles.last,
    ]}>
      <Text style={styles.title}>{name}</Text>
      <Text>{notes}</Text>
      <Cases cases={cases} />
    </View>
  );
};

const createStyles = () => StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  last: {
    marginBottom: 0,
  },
  title: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
});

export default StageComponent;
