import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header
                  text="Header"
                />
                <div className="wrapper">
                    <Switch>
                        <Route path="/" component={() => <div>Body</div>} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Layout;
