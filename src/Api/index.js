import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api';

export const fetchData = (country) => {
  let countryURL = URL;
  if (country) {
    countryURL = `${URL}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(countryURL);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

// Instead of Global, it fetches the daily data for the US
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(
      'https://api.covidtracking.com/v1/us/daily.json'
    );

    return data.map(({ positive, recovered, death, dateChecked: date }) => ({
      confirmed: positive,
      recovered,
      deaths: death,
      date,
    }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
