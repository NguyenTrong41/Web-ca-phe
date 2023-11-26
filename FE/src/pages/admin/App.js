import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

import PrivateRoutes from './layouts/PrivateRoutes';
import PublicRoutes from './layouts/PublicRoutes';
import Main from './layouts/Main';
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route element={<Main/>}>
        {/* <Route element={<PrivateRoutes/>}> */}
          <Route path='/admin' element={<Dashboard/>}/>
        {/* </Route> */}
      </Route>
      {/* <Route element={<PublicRoutes/>}> */}
        <Route path='/admin/login' element={<Login/>}/>
      {/* </Route> */}
    </Routes>
  );
}

export default App;
