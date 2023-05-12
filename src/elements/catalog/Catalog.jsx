import React from 'react'
import styles from './Catalog.module.css';
import CarItem from '../CarItem/CarItem';


const Catalog = ({data}) => {
  return (
    <div className={styles.cars__list}>
    {data.map((itm) => (
      <CarItem
        key={itm.id}
        {...itm}
      />
    ))}
  </div>
  )
}

export default Catalog