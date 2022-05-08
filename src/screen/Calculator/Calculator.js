import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';

const Calculator = () => {
  const [number, setNumber] = useState([]);
  const [result, setResult] = useState('');

  
  useEffect(() => {
    console.log(number);
    console.log(result);
  }, [number, result]);
  

  const handleReset = () => {
    setNumber([]);
    setResult('');
  };

  const handleResult = data => {
    // Convert Array To String
    const arrayTotString = data.toString();
    // Trim Commas From Array
    const trimCommas = arrayTotString.replace(/,/g, '');
    // Sum All Numbers With eval
    const sumWithEval = eval(trimCommas);
    // return sumWithEval;
    setResult(sumWithEval);
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          width: '100%',
          height: '40%',
          backgroundColor: '#875032',
          position: 'relative',
        }}>
        <View
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0,
          }}>
          <Text
            style={{
              marginBottom: 10,
              fontSize: 40,
              color: '#FFF',
              textAlign: 'right',
            }}>
            {number.toString().replace(/,/g, '')}
          </Text>
          <Text
            style={{
              fontSize: 40,
              color: '#FFF',
              textAlign: 'right',
            }}>
              {result}
            </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            marginTop: 10,
            width: '100%',
          }}>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#b5601f',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => handleReset()}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              C
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#b5601f',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => number.push('%')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              %
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#b5601f',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => number.pop()}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              Hapus
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#b5601f',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => handleResult(number)}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              =
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#875032',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => number.push('1')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#875032',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => number.push('2')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#875032',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => number.push('3')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#875032',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => number.push('4')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#875032',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => number.push('5')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#875032',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => number.push('6')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#875032',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => number.push('7')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#875032',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => number.push('8')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#875032',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => number.push('9')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#875032',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => number.push('00')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              00
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#875032',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => number.push('0')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#875032',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => number.push(',')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              ,
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#b34e17',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => number.push('+')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              +
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#b34e17',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => number.push('-')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              -
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#b34e17',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => number.push('*')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              x
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '20%',
              borderRadius: 10,
              backgroundColor: '#b34e17',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
            onPress={() => number.push('/')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              /
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Calculator;
