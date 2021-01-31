import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="App">
      {!user ? <Login /> :
      <div className="app_body">
        {/* sideBras */}
        
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/room/:roomid">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>
        
      </div>
      }
    </div>
  );
}

export default App;
