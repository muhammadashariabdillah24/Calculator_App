import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, { useEffect } from 'react';
import {Fumi} from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectDropdown from 'react-native-select-dropdown';
import currencyConverter from '../../services/Base/Convert/Convert';

const CurrencyExchange = () => {
  const [fromCountrySelect, setFromCountrySelect] = React.useState('');
  const [toCountrySelect, setToCountrySelect] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [resultExchangeCurrency, setResultExchangeCurrency] = React.useState('');
  const threeLettersCountry = [
    'GBP',
    'USD',
    'EUR',
    'JPY',
    'AUD',
    'CAD',
    'CHF',
    'CNY',
    'HKD',
    'IDR',
    'ILS',
    'INR',
    'KRW',
    'MXN',
    'MYR',
    'NZD',
    'PHP',
    'SGD',
    'THB',
    'ZAR',
  ];

  useEffect(() => {
    console.log(fromCountrySelect);
    console.log(toCountrySelect);
  }, [fromCountrySelect, toCountrySelect]);
  

  const handleCurrency = async () => {
    try {
      const data = {
        from: fromCountrySelect,
        to: toCountrySelect,
        amount: amount,
      }
  
      const resultExchangeCurrency = await currencyConverter(data)
      console.log(JSON.stringify(resultExchangeCurrency));
      const result = resultExchangeCurrency.result.toString();
  
      if (!result) {
        Alert.alert(
          'Terjadi Kesalahan',
          'Tolong cek inputan mu!',
          [
            {text: 'OK', onPress: () => {
              setFromCountrySelect('');
              setToCountrySelect('');
            }},
          ],
          {cancelable: false},
        )
      }
  
      setResultExchangeCurrency(result);
      setFromCountrySelect('');
      setToCountrySelect(''); 
    } catch (error) {
      Alert.alert(
        'Terjadi Kesalahan',
        'Tolong cek inputan mu!',
        [
          {text: 'OK', onPress: () => {
            setFromCountrySelect('');
            setToCountrySelect('');
          }},
        ],
        {cancelable: false},
      )
    }
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          marginVertical: 20,
        }}>
        <SelectDropdown
          data={threeLettersCountry}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setFromCountrySelect(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
          rowTextStyle={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
          renderDropdownIcon={() => {
            return (
              <Icon
                name="chevron-down"
                size={30}
                color="#000"
                style={{
                  alignSelf: 'center',
                }}
                />
            );
          }}
          dropdownTextStyle={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
          dropdownTextHighlightStyle={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
          dropdownTextSelectedStyle={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
          buttonStyle={{
            backgroundColor: '#fff',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#000',
            padding: 10,
            margin: 10,
          }}
        />
        <Icon
          name="swap-horizontal"
          size={50}
          color="#000"
          style={{
            alignSelf: 'center',
          }}
        />
        <SelectDropdown
          data={threeLettersCountry}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setToCountrySelect(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
          renderDropdownIcon={() => {
            return (
              <Icon
                name="chevron-down"
                size={30}
                color="#000"
                style={{
                  alignSelf: 'center',
                }}
                />
            );
          }}
          rowTextStyle={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
          dropdownTextStyle={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
          dropdownTextHighlightStyle={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
          dropdownTextSelectedStyle={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
          buttonStyle={{
            backgroundColor: '#fff',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#000',
            padding: 10,
            margin: 10,
          }}
        />
      </View>
      <Fumi
        label={'Masukan jumlah nominal'}
        iconClass={Icon}
        iconName={'cash-100'}
        iconColor={'#f95a25'}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
        style={{
          width: '100%',
        }}
        onChangeText={(text) => setAmount(text)}
      />

      <Fumi
        label={'Hasil nilai tukar'}
        iconClass={Icon}
        iconName={'cash-100'}
        iconColor={'#f95a25'}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
        value={resultExchangeCurrency}
        editable={false}
        style={{
          width: '100%',
          marginVertical: 20,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#f95a25',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
          paddingVertical: 20,
          borderRadius: 5,
          width: '100%',
          flexDirection: 'row',
        }}
        onPress={handleCurrency}
        >
        <Icon name={'check-circle'} size={30} color={'#43bd2d'} />
        <Text
          style={{
            fontSize: 20,
            color: '#fff',
            marginLeft: 10
          }}>
          Tukar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CurrencyExchange;
