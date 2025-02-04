import React from 'react';
import { v4 as uuid4 } from 'uuid';
import NewCountry from './NewCountry';
import style from './country.module.css';

function Country(props) {
  return (
    <section className={style.countries}>
        {props.countries.map((country) => {
            const countryNew = {country, id:uuid4()}

            return <NewCountry {...countryNew} key={countryNew.id} onRemoveCountry = {props.onRemoveCountry}/>
        })}
    </section>
  )
}

export default Country
