import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase'
import { useStateValue } from './providers/StateProvider'
import Checkout from './components/Checkout';



function App() {
  return (
    <div className='app'>

      <Router>
        <Switch>

        <Route path='/checkout'>
            <Checkout />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/'>
            <Header/>
            <Home/>
          </Route>


        </Switch>
      </Router>

    </div>
  )
}

export default App;
