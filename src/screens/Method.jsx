import React from 'react';
import { StyleSheet, View } from 'react-native';

import Stages from '../components/Stages';

const MethodScreen = ({ route }) => {
  const styles = createStyles();
  const { method } = route.params;

  return (
    <View style={styles.container}>
      <Stages method={method} />
    </View>
  );
};

const createStyles = () => StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
});

export default MethodScreen;
