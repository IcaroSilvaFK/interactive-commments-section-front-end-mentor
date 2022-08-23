import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { ControllerRoute } from './controller';

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route
          path='/'
          element={
            <ControllerRoute>
              <Login />
            </ControllerRoute>
          }
        />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
      </Router>
    </BrowserRouter>
  );
}
