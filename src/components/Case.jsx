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
      <Text>{name}</Text>
      <Text>{algorithm.join(' ')}</Text>
    </View>
  );
};

const createStyles = () => StyleSheet.create({
  container: {
    // flex: 1,
  },
  image: {
    height: 100,
    width: 100,
  },
});

export default CaseComponent;
