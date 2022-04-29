import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import './styling/App.css'
import { store, persistor } from './store/store'

import Home from './components/Home';

function App() {

  /* const isComplite = true */

  return (
    <React.Fragment>
      <Provider store={store}>
        <PersistGate Loading = {null} persistor = {persistor}>
          <Home />
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
}

export default App;