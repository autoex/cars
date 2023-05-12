import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AddForm from '../../elements/addForm/AddForm';
import Catalog from '../../elements/catalog/Catalog';
import { CarServices } from '../../services/car.services';
import styles from './Cars.module.css';

const Cars = () => {
  

  const { data, isError, isLoading } = useQuery({
    queryKey: ['cars'],
    queryFn: () => CarServices.getAll(),
  });

  if (isLoading) return 'Fetching data...';
  if (isError) return 'Error...';
  return (
    <div className={styles.cars}>
      <h1>Cars</h1>
      <AddForm
      />
     <Catalog data={data}/>
    </div>
  );
};

export default Cars;
