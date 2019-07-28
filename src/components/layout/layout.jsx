import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import CocktailList from './components/cocktails_list';
import cocktailList from './cocktails';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header
                  text="Coctails' Set"
                />
                <div className="wrapper">
                    <Switch>
                        <Route path="/" component={() => <div> <CocktailList items={cocktailList} /> </div>} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Layout;
