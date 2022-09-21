import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import React, { FC } from 'react';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

interface Props {
    iconName: string;
    placeholder: string;
    onChangeText: (text: string) => void;
}

const Input: FC<Props> = ({ iconName, placeholder, onChangeText }) => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
        <Ionicons name={iconName} size={22} color='#555' style={{ padding: 5 }} />
      </View>

      <View style={{ justifyContent: 'center' }}>
        <TextInput 
            placeholderTextColor='' 
            placeholder={placeholder} 
            onChangeText={onChangeText}
            style={{ padding: 5 }}
        />
      </View>
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        width: width / 1.05,
        borderBottomColor: '#aaa',
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignItems: 'center',
    }
})