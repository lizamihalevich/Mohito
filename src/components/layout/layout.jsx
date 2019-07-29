import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CocktailList from 'components/cocktailsList';
import Header from './components/header';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header
                  text="Coctails' Set"
                />
                <div className="wrapper">
                    <Switch>
                        <Route path="/" component={CocktailList} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Layout;
