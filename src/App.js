import React from 'react';
import './App.css';
import data from './data.json';

import FilterableProductTable from './Components/FilterableProductTable/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={ data.data }/>
    </div>
  );
}

export default App;
