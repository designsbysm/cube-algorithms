import React from 'react';
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
      <Text style={styles.algorithm}>{algorithm.join(' ')}</Text>
    </View>
  );
};

const createStyles = imageWidth => StyleSheet.create({
  algorithm: {
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    // backgroundColor: '#f00',
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
    textTransform: 'uppercase',
  },
});

export default CaseComponent;
