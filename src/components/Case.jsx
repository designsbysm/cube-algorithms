import React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';

const CaseComponent = ({ algorithm, name, SVG }) => {
  const styles = createStyles();

  if (!SVG) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        {Platform.OS !== 'web' ? <SVG
          height='100%'
          width='100%'
        />
          : <Image
            source={SVG}
            style={styles.image}
          />}
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.algorithm}>{algorithm.join(' ')}</Text>
    </View>
  );
};

const createStyles = () => StyleSheet.create({
  algorithm: {
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    height: 150,
    width: 150,
  },
  name: {
    color: '#999',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default CaseComponent;
