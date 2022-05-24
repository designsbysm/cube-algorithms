import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Cases from './Cases';

const StageComponent = ({ cases, name, notes }) => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text>{notes}</Text>
      <Cases cases={cases} />
    </View>
  );
};

const createStyles = () => StyleSheet.create({
  container: {
    // flex: 1,
    marginBottom: 45,
  },
  title: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

});

export default StageComponent;
