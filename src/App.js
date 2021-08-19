import './App.css';
import  "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from './components/Navbar';
import { Route, Switch, Redirect, Router } from 'react-router-dom'
import { Liste } from './pages/Liste'
import { ProductDetail} from './pages/ProductDetail'
 import { SearchPage } from './pages/SearchPage'

function App() { 
  return (
    <div>
      <Navbar/>
    <div className="container">
      <Switch>
        <Route exact path="/liste" component={Liste} />
        <Route exact path="/search" component={SearchPage} />
        <Route path="/liste/:idd" component={ProductDetail} />
        <Redirect to="/Liste" /> 
      </Switch>
    </div>
    </div>
  );
}

export default App;
