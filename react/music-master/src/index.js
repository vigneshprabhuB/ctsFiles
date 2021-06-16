import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { createStore ,} from 'redux';
import { clickReducer } from './reducers/index'
import { Provider } from 'react-redux'
const store = createStore(clickReducer, {
    count: 0,
    value: "Hai"
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));





