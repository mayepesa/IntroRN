import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { Fab } from '../components/Fab';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'gray',
  },
});

const ContadorScreen = () => {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>

      {/* <Button
        onPress={ () => setContador(contador + 1)}
        title="Click me"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      /> */}
      {/* fab: floating action btn */}
      <Fab 
      title="+1"
      onPress={() => setContador(contador + 1)}
      position= "br"
      />
      <Fab 
      title="-1"
      onPress={() => setContador(contador - 1)}
      position= 'bl'
      />

      {/* <TouchableOpacity
        style={styles.fabLocationBL}
        onPress={() => setContador(contador - 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default ContadorScreen;
