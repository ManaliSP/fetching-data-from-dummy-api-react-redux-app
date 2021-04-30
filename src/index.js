import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PostsReducer from './reducer';
import { applyMiddleware, createStore } from 'redux';
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const store = createStore(PostsReducer,composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
);
