import React from 'react';
import algorithmToString from '../utils/algorithmToString';
import { Image, Platform, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CaseComponent = ({ algorithm, name, size, SVG }) => {
  const navigation = useNavigation();
  const styles = createStyles(size);

  if (!SVG) {
    return null;
  }

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('algorithm', {
          algorithm,
          name,
        });
      }}
      style={styles.container}>
      {Platform.OS !== 'web' ?
        <SVG style={styles.image} />
        :
        <Image
          source={SVG}
          style={styles.image}
        />}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.algorithm}>{algorithmToString(algorithm)}</Text>
    </Pressable>
  );
};

const createStyles = imageWidth => StyleSheet.create({
  algorithm: {
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    height: imageWidth,
    marginBottom: 10,
    width: imageWidth,
  },
  name: {
    color: '#999',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
});

export default CaseComponent;
