import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from '../modules/Navbar/Navbar';

import UserRoutes from '../UserRoutes';

import store from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-07-phonebook">
        <Navbar />
        <UserRoutes />
      </BrowserRouter>
    </Provider>
  );
};
