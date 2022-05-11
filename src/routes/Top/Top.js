import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Calculator from '../../screen/Calculator/Calculator';
import CurrencyExchange from '../../screen/CurrencyExchange/CurrencyExchange';
import {NavigationContainer} from '@react-navigation/native';

const Top = createMaterialTopTabNavigator();

const TopNavigator = () => {
  return (
    <NavigationContainer>
      <Top.Navigator>
        <Top.Screen
          name="Calculator"
          component={Calculator}
          options={{
            tabBarLabel: 'Kalkulator',
          }}
        />
        <Top.Screen
          name="CurrencyExChange"
          component={CurrencyExchange}
          options={{
            tabBarLabel: 'Nilai Tukar',
          }}
        />
      </Top.Navigator>
    </NavigationContainer>
  );
};

export default TopNavigator;
