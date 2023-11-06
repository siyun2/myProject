import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import React, {useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './App/pages/Main';
import Login from './App/pages/Login';
import Join from './App/pages/Join';
import FindPw from './App/pages/FindPw';
import Category from './App/pages/Category'


function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Join"
          component={Join}
          options={{
            headerTitle: '회원가입',
            headerTitleAlign: 'center',

          }}
        />
        <Stack.Screen
          name="FindPw"
          component={FindPw}
          options={{
            headerTitle: '비밀번호 찾기',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerTitle: 'Main',
            headerTitleAlign: 'center',
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{
            headerTitle: 'Category',
            headerTitleAlign: 'center',
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({

});

export default App
