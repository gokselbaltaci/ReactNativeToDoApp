import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './Input.styles';

const Input = ({setText, text, handleAddTodo}) => {
  const [changeColor, setChangeColor] = useState('#808080');

  return (
    <View style={styles.input_container}>
      <TextInput
        style={styles.input_textInput}
        placeholder="Şimdi planlamanı yap.."
        placeholderTextColor="#eeeeee80"
        onChangeText={setText}
        value={text}
        onFocus={() => setChangeColor('orange')}
        onBlur={() => setChangeColor('#808080')}
      />
      <TouchableOpacity
        style={{
          margin: 10,
          padding: 10,
          backgroundColor: `${changeColor}`,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          fontWeight: 'bold',
        }}
        onPress={handleAddTodo}>
        <Text style={{color: 'white'}}>Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
