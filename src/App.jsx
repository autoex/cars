import React from 'react';
import Home from './pages/home/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className='app'>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </div>
  );
};

export default App;
