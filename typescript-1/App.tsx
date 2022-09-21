import React, { FC, useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Input from './components/Input';
import { Fruit, Fruits } from './components/Data';
import ListItem from './components/ListItem';

const App: FC = () => {
  const [fruits, setFruits] = useState<Fruit[] | null>(null);
  const [inputShown, setInputShown] = useState<boolean>(false);
  const [newFruit, setNewFruit] = useState<Fruit | null>(null);

  useEffect(() => {
    (() => {
      setFruits(Fruits.sort((a: Fruit, b: Fruit): number => {
        return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
      }));
    })();
  }, []);
  
  const handleSearch = (text: string) => {
    const fruits: Fruit[] = Fruits.filter((fruit) => fruit.name.includes(text));
    setFruits(fruits);
  };

  const handleAdd = () => {
    if(newFruit !== null && fruits !== null) setFruits([...fruits, newFruit]);
  };

  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <Input iconName='md-search' placeholder='Search' onChangeText={(text) => handleSearch(text)}/>
      <FlatList 
        data={fruits}
        renderItem={({ item }) => (
          <ListItem id={item.id} name={item.name} price={item.price} />
        )}
      />
      <View>
        <TouchableOpacity 
          style={{
            alignSelf: 'center',
            backgroundColor: 'lightblue',
            padding: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginVertical: 10,
            display: inputShown == false ? 'flex' : 'none',    
          }}
          onPress={() => setInputShown(true)}
        >
          <Text style={{ color: 'white' }}> Add </Text>
        </TouchableOpacity>
      </View>
      <View style={{display: inputShown == true ? 'flex' : 'none'}}>
        <Input iconName='add-circle-outline' placeholder='Fruit name' onChangeText={(text) => {
          if(newFruit !== null){
            setNewFruit({...newFruit, name: text});
          } else {
            setNewFruit({id: Date.now(), name: text, price: 0});
          }
        }} />
        <Input iconName='add-circle-outline' placeholder='Fruit price' onChangeText={(text) => {
          if(newFruit !== null){
            setNewFruit({...newFruit, price: +text});
          } else {
            setNewFruit({id: Date.now(), name: "", price: +text});
          }
        }} />
        <TouchableOpacity 
          style={{
            alignSelf: 'center',
            backgroundColor: 'lightblue',
            padding: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginVertical: 10,
          }}
          onPress={() => handleAdd()}
        >
          <Text style={{ color: 'white' }}> Add </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
