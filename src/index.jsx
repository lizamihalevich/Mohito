import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import Layout from 'components/layout';
import { createBrowserHistory } from 'history';
import './index.pcss';

function App() {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <Layout />
        </Router>
    );
}

ReactDOM.render(
    <App />,
    window.document.getElementById('app'),
);
