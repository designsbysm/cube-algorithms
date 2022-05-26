import React, { useLayoutEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';

import Stage from './Stage';

const StagesComponent = ({ method }) => {
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
