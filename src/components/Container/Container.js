import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import styles from './Container.style';

export default function Container() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Proje</Text>
    </SafeAreaView>
  );
}
