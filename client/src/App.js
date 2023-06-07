
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

import AppContextProvider from './contexts/AppContext';
import ProtectedRoute from './components/routing/ProtectedRoute';

import Dmhh from './views/Dmhh';
import Lading from './components/layout/Landing'
import Home from './views/home';
import Dmnhdt from './views/Dmnhdt';
import Dmdt from './views/Dmdt';

function App() {

  return (
    <AppContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Lading} />
          <ProtectedRoute exact path='/home' component={Dmhh} />
          <ProtectedRoute exact path='/dmhh' component={Dmhh} />
          <ProtectedRoute exact path='/dmnhdt' component={Dmnhdt} />
          <ProtectedRoute exact path='/dmdt' component={Dmdt} />
        </Switch>
      </Router>
    </AppContextProvider>
  )
}

export default App;
