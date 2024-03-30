import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Counter';
import { configure } from './Redux/Store';
import { Provider } from 'react-redux';

function App() {
  const store = configure()
  return (
  <Provider store={store}>
    <Counter/>
  </Provider>
  );
}

export default App;
