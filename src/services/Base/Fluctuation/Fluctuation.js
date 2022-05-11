import {baseUrl, myHeaders} from '../Base';

const Fluctuation = async data => {
  const Headers = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  };

  const resultCurrencyConverter = await fetch(
    `${baseUrl}/fluctuation?start_date=${data.start_date}&end_date=${data.end_date}`,
    Headers,
  )
    .then(response => response.json())
    .then(result => console.log('Hasil Dari Fungsi Fluctuation ' + result))
    .catch(error => console.log('Fungsi Convert Error ' + error));
  return resultCurrencyConverter;
};

export default Fluctuation;
