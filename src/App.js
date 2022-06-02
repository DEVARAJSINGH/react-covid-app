import React, { useState, useEffect } from 'react';

import { fetchData } from './Api';
import styles from './App.module.css';
import './style.css';

export default function App() {
  const image =
    'https://raw.githubusercontent.com/adrianhajdin/project_corona_tracker/master/src/images/image.png';

  const [covidData, setCovidData] = useState({ data: {}, country: '' });

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      setCovidData({ data });
    })();
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      {/* <Cards data={data} />
      <CountryPicker handleCountryChange={this.handleCountryChange} />
      <Chart data={data} country={country} /> */}
    </div>
  );
}
