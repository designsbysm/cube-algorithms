import React from 'react';
import { StyleSheet, View } from 'react-native';

import Stages from '../components/Stages';

const MethodScreen = ({ route }) => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      <Stages method={route.params.method} />
    </View>
  );
};

const createStyles = () => StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default MethodScreen;
