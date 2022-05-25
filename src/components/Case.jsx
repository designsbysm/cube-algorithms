import React from 'react';
import algorithmToString from '../utils/algorithmToString';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';

const CaseComponent = ({ algorithm, name, size, SVG }) => {
  const styles = createStyles(size);

  if (!SVG) {
    return null;
  }

  return (
    <View style={styles.container}>
      {Platform.OS !== 'web' ?
        <SVG style={styles.image} />
        :
        <Image
          source={SVG}
          style={styles.image}
        />}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.algorithm}>{algorithmToString(algorithm)}</Text>
    </View>
  );
};

const createStyles = imageWidth => StyleSheet.create({
  algorithm: {
    marginTop: 5,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    height: imageWidth,
    width: imageWidth,
  },
  name: {
    color: '#999',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
    textTransform: 'uppercase',
  },
});

export default CaseComponent;
