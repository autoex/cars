import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CarServices } from '../../services/car.services';

const useCreateCar = (reset) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data) => {
      CarServices.addCar(data);
    },
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries({ queryKey: ['cars'] });
    },
  });

  const createCar = (data) => {
    mutate(data);
  };

  return createCar;
};

export default useCreateCar;
