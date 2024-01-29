import { Route, Routes } from 'react-router-dom';
import './assets/css/App.css';
import 'animate.css';
import Dashboard from './container/dashboard/Dashboard';
import TextAnimation from './container/textAnimations/TextAnimation';
import CustomComponentsDashboard from './container/customComponents';
import CustomButtonsDashboard from './container/customButtons';

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
        <Route
          path='/custom-components'
          element={<CustomComponentsDashboard />}
        />
        <Route
          path='/custom-buttons'
          element={<CustomButtonsDashboard />}
        />
      </Routes>
    </div>
  );
}

export default App;
