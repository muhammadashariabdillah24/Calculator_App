import {baseUrl, myHeaders} from '../Base';

const currencyConverter = async data => {
  const Headers = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  };

  const resultCurrencyConverter = await fetch(
    `${baseUrl}/convert?to=${data.to}&from=${data.from}&amount=${data.amount}`,
    Headers,
  )
    .then(response => response.json())
    .catch(error => console.log('Fungsi Convert Error ', error));

  return resultCurrencyConverter;
};

export default currencyConverter;