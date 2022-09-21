import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Fruit } from './Data';

const ListItem: FC<Fruit> = ({ id, name, price }) => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.list, alignItems: 'flex-start' }}>
        <Text> {name} </Text>
      </View>
      <View style={{ ...styles.list, alignItems: 'flex-end' }}>
        <Text> {price} </Text>
      </View>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        padding: 10,
        marginVertical: 10
    },
    list: {
        width: '50%',
    },
})