import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux"
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore();

function App() {
    return(
        <div className="boxes">
          <div className="box">
            <Header car={state.car} />
            <AddedFeatures car={state.car} />
          </div>
          <div className="box">
            <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
            <Total car={state.car} additionalPrice={state.additionalPrice} />
          </div>
        </div>
      );
}




const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store= {store}><App /></Provider>, rootElement);
