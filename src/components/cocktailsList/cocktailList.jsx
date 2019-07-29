import React, { Component } from 'react';
import PropTypes from 'react-proptypes';
import styles from './coctaillist.styles.pcss';
import Cocktail from './components/cocktail';
import cocktailList from '../cocktails';

class CocktailList extends Component {
    render() {
        const elements = cocktailList.map((item) => {
            const { ...itemProps } = item;
            return (
                <li key={item.id}>
                    <Cocktail {...itemProps} />
                </li>
            );
        });
        return (
            <div className={styles.cocktail_list__wrapper}>
                <ul className={styles.cocktail_list}>
                    {elements}
                </ul>
            </div>
        );
    }
}

Cocktail.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
    }).isRequired,
};

export default CocktailList;
