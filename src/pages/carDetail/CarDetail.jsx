import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import withAuth from '../../HOC/withAuth';
import CarItem from '../../elements/CarItem/CarItem';
import { CarServices } from '../../services/car.services';

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    if (!id) return;
    async function getData() {
      const car = await CarServices.getCar(id);
      setCar(car);
    }

    getData();
  }, []);

  
  return <CarItem {...car} backButton />;
};

export default withAuth(CarDetail);
