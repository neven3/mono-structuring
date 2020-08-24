import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomeScreen from './Pages/HomeScreen';
import ListScreen from './Pages/ListScreen';
import AddScreen from './Pages/AddScreen';
import EditScreen from './Pages/EditScreen';
// import RootStore from './Stores/RootStore';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/add" component={AddScreen} />
        <Route exact path="/edit" component={EditScreen} />
        <Route exact path="/list" component={ListScreen} />
      </Switch>
    </div>
  );
}

export default App;
