import React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';

const NotationComponent = ({ name, size, SVG }) => {
  const styles = createStyles(size);

  return (
    <View style={styles.container}>
      {Platform.OS !== 'web' ?
        <SVG style={styles.image} />
        :
        <Image
          source={SVG}
          style={styles.image}
        />}
      <Text>{name}</Text>
    </View>
  );
};

const createStyles = imageWidth => StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    height: imageWidth,
    marginBottom: 10,
    width: imageWidth,
  },
});

export default NotationComponent;
