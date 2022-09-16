import { Provider } from 'react-redux';

import { TodoWrapper } from '../containers/TodoWrapper';
import { store } from '../store/store';

export const App = () => (
  <Provider store={store}>
    <TodoWrapper />
  </Provider>
);
