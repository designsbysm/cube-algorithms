import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';

import Case from './Case';

const CasesComponent = ({ cases }) => {
  const window = Dimensions.get('window').width;

  let columns = 2;
  if (window >= 1400) {
    columns = 7;
  } else if (window >= 1200) {
    columns = 6;
  } else if (window >= 992) {
    columns = 5;
  } else if (window >= 768) {
    columns = 4;
  } else if (window >= 576) {
    columns = 3;
  }

  const tile = (window - 30) / columns;
  const styles = createStyles(tile);

  return (
    <View style={styles.container}>
      {cases.map(item => {
        return (
          <View
            key={item.name}
            style={styles.case}>
            <Case
              size={tile * 0.7}
              {...item}
            />
          </View>
        );
      })}
    </View>
  );
};

const createStyles = tile => {
  return StyleSheet.create({
    case: {
      padding: 15,
      width: tile,
    },
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });
};

export default CasesComponent;
