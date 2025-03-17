import React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import { View, Text, SafeAreaView, StatusBar,StyleSheet, Button} from 'react-native';

//Tela Home

    function TelaHome({navigation}){
      return(
      <View style={{flex: 1,padding: 10,}}>
        <Text style={{marginBottom: 10, fontSize: 16,}}>Esta a Home</Text>
        <Button
          title='Ir para Canal'
          onPress={()=> navigation.navigate('Canal')}
        />
      </View>
      )
    }

    function TelaCanal({navigation}){
      return(
      <View>
        <Text>Esta a Canal</Text>
      </View>
      )
    }

const Stack = createStackNavigator()
export default function App(){
    
    
  return (
    
     <NavigationContainer>
     <StatusBar barStyle='default'/>
      <Stack.Navigator initialRouteName='Home' screenOptions={{gestureEnabled: true, ...TransitionPresets.SlideFromRightIOS}}>
        <Stack.Screen 
        name='Home' 
        component={TelaHome}
        options={{title: 'AngoNect', 
        headerStyle:{backgroundColor:'#333'},
        headerTintColor: '#fff',
        headerTintStyle:{fontWeight: 'bold'},
        headerRight:()=>(
          <Button
          title='btn'
          color= 'red'
          onPress={()=> alert('Botão Clicado')}
          />
        )
        }}/>
        <Stack.Screen name='Canal' component={TelaCanal}/>
      </Stack.Navigator>
     </NavigationContainer>
    
  )
}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  containerS:{
    flex: 1,

  },
})