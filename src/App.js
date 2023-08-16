import { Route, Routes } from 'react-router-dom';
import './assets/css/App.css';
import 'animate.css';
import Dashboard from './container/dashboard/Dashboard';
import TextAnimation from './container/textAnimations/TextAnimation';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Dashboard />}
        />
        <Route
          path='/text'
          element={<TextAnimation />}
        />
      </Routes>
    </div>
  );
}

export default App;
