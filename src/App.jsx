import React from 'react';
import './App.css';
import AppRoutes from './routes/routes';
import { Layout } from './layout';

function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;
