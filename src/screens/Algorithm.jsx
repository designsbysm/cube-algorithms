import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';

import Cases from '../components/Cases';
import Notation from '../components/Notation';
import algorithmAddGroupTags from '../utils/algorithmAddGroupTags';
import styles from '../styles/page';

const MethodScreen = ({ navigation, route }) => {
  const { algorithm, name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [
    name,
    navigation,
  ]);

  const filtered = algorithm.map(algorithmAddGroupTags)
    .flat()
    .filter(item => !!item?.name);

  return (
    <View style={styles.container}>
      <Cases
        Render={Notation}
        cases={filtered}
      />
    </View>
  );
};

export default MethodScreen;
