import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import CocktailList from '../cocktailsList';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header
                  text="Coctails' Set"
                />
                <div className="wrapper">
                    <Switch>
                        <Route path="/" component={() => <div> <CocktailList /> </div>} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Layout;
