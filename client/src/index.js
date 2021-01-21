//  import React from 'react';
//  import ReactDom from 'react-dom';
//  import { Provider } from 'react-redux'; // provider let us accses from anywhere 
//  import { createStore, applyMiddleware, componse } from 'redux';
//  import thunk from 'redux-thunk' ;
//  import reducers from './reducers';

//  import App from './App'

//  const store = createStore(reducers, compose(applyMiddleware, (thunk)));
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // provider let us accses from anywhere 
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import  reducers  from './reducers';
import App from './App';


const store = createStore(reducers, compose(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );