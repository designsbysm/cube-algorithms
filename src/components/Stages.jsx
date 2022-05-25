import React, { useLayoutEffect, useState } from 'react';
import useEvent from '../hooks/useEvent';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';

import Stage from './Stage';

const StagesComponent = ({ method }) => {
  const [
    width,
    setWidth,
  ] = useState(0);
  useEvent('resize', () => {
    const window = Dimensions.get('window').width;
    setWidth(window);
  });

  return (
    <ScrollView>
      {method.map((item, index) => {
        const isLast = method.length === index + 1;

        return (
          <Stage
            isLast={isLast}
            key={item.name}
            {...item}
          />
        );
      })}
    </ScrollView>
  );
};

export default StagesComponent;
