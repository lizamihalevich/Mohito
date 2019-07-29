import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from 'components/layout';
import { createBrowserHistory } from 'history';
import configureStore from './resources/store';
import './index.pcss';

const initialState = {};
const history = createBrowserHistory();
const store = configureStore(initialState, history);

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Layout />
            </Router>
        </Provider>
    );
}

ReactDOM.render(
    <App />,
    window.document.getElementById('app'),
);
