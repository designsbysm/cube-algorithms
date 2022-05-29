import React from 'react';
import { StyleSheet, View } from 'react-native';

import Stages from '../components/Stages';
import pageStyles from '../styles/page';

const MethodScreen = ({ route }) => {
  const styles = createStyles();
  const { method } = route.params;

  return (
    <View style={[
      pageStyles.container,
      styles.container,
    ]}>
      <Stages method={method} />
    </View>
  );
};

const createStyles = () => StyleSheet.create({
  container: {
    paddingVertical: 30,
  },
});

export default MethodScreen;
