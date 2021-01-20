import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FindBuddy } from './find-buddy-landing-page/find-buddy';
import { SelectCountry } from './select-country/select-country';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={FindBuddy} exact />
          <Route path="/select-country" component={SelectCountry} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
