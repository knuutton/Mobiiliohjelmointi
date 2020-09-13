import React, { useState } from 'react';
import { View,  TextInput, Button, StyleSheet, Text} from 'react-native';

export default function Calculator () {

    const [numA, setNumA] = useState('');
    const [numB, setNumB] = useState('');
    const [result, setResult] = useState('');

    const plusButtonPressed = () => {
        const sum = parseFloat(numA) + parseFloat(numB);
        setResult(sum);
    };

    const minusButtonPressed = () => {
        const minus = parseFloat(numA) - parseFloat(numB);
        setResult(minus);
    };


    return (
        <View style = {styles.container} >
            <Text> Result: {result} </Text>
            <TextInput  
            placeholder= 'Aseta numero'   
            style={styles.TextInputStyle}  
            keyboardType={'numeric'}
            numeric value
            onChangeText = { numA => setNumA( numA )}
            value = { numA }
            />
            <TextInput  
            placeholder= 'Aseta numero'   
            style={styles.TextInputStyle}  
            keyboardType={'numeric'}
            numeric value
            onChangeText = { numB => setNumB( numB )}
            value = { numB }
            />
            <View style = {{ flexDirection: 'row' }}>
            <Button onPress = {plusButtonPressed} style = { styles.button } title = ' + '/>
            <Button onPress = {minusButtonPressed} style = { styles.button } title = ' - ' /> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({  
    container: {  
      flex: 1,  
      justifyContent: 'center',  
  },  
    headerText: {  
      fontSize: 20,  
      textAlign: "center",  
      margin: 10,  
      fontWeight: "bold"  
  },  
  TextInputStyle: {  
      textAlign: 'center',  
      height: 40, 
      width:  100,
      borderRadius: 10,  
      borderWidth: 2,  
      borderColor: 'black',  
      marginBottom: 10  
  },  
  });
