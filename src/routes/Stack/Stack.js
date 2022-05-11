import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Calculator from '../../screen/Calculator/Calculator'
import CurrencyExchange from '../../screen/CurrencyExchange/CurrencyExchange'

const NativeStack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
      <NativeStack.Navigator>
        <NativeStack.Screen name="Calculator" component={Calculator} />
        <NativeStack.Screen name="CurrencyExchange" component={CurrencyExchange} />
      </NativeStack.Navigator>
  )
}

export default StackNavigator