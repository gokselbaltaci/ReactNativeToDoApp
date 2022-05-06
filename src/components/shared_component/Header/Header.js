import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.styles';

const Header = ({todos}) => {
  const activeTodos = todos.filter(todo => !todo.isDone);

  return (
    <View style={styles.header_container}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <Text style={styles.count_todo}>{activeTodos.length}</Text>
    </View>
  );
};
export default Header;
