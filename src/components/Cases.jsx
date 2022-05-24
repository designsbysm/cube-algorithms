import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Case from './Case';

const CasesComponent = ({ cases }) => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      {cases.map(item => {
        return (
          <Case
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
    display: 'grid',
    flex: 1,
    gridGap: 30,
    gridTemplateColumns: '1fr 1fr',
  },
});

export default CasesComponent;
