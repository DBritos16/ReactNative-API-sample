import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {


  const [users, setUsers] = useState([]);

  const fetchData = async()=>{
    const request = await fetch('https://jsonplaceholder.typicode.com/users');

    const response = await request.json();


    if(request.ok) return setUsers(response);
  }

  const Item = ({data}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{data.name}</Text>
      <Text>{data.username}</Text>
      <Text>{data.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      
        <Pressable onPress={()=> fetchData()} style={styles.button}><Text style={{color: 'white'}}>Mostrar usuarios</Text></Pressable>
        <Pressable onPress={()=> setUsers([])} style={styles.button}><Text style={{color: 'white'}}>Ocultar usuarios</Text></Pressable>

        <FlatList data={users} renderItem={({item}) => <Item data={item}/>}/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20
  },
  button: {
    backgroundColor: 'purple',
    padding: 12,
    margin: 5,
    height: 45
  }
});
