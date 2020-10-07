import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/what-we-do" component={Whatwedo} />
          <Route path="/contact" component={Contact} />
          <Route path="/corporate-transparency" component={Corporate} />
          <Route path="/board" component={Board} />
          <Route path="/volunteer" component={Volunteer} />
          <Route path="/williambentz" component={William} />
          <Route path="/take-action" component={TakeAction} />
          <Route path="/press-release" component={PressRelease} />
          <Route path="/donation" component={Donation} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
