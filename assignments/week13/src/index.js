import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const mystore = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={mystore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
