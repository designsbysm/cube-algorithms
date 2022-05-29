import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';

const CasesComponent = ({ Render, cases }) => {
  const { width } = useWindowDimensions();

  let columns = 2;
  if (width >= 1400) {
    columns = 7;
  } else if (width >= 1200) {
    columns = 6;
  } else if (width >= 992) {
    columns = 5;
  } else if (width >= 768) {
    columns = 4;
  } else if (width >= 576) {
    columns = 3;
  }

  const tile = (width - 30) / columns;
  const styles = createStyles(tile);

  return (
    <View style={styles.container}>
      {cases.map((item, index) => {
        return (
          <View
            key={`${item.name}-${index}`}
            style={styles.case}>
            <Render
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
