import React, { Component } from 'react';
import PropTypes from 'react-proptypes';
import styles from './coctaillist.styles.pcss';
import Cocktail from '../cocktail';

export default class CocktailList extends Component {
    render() {
        const { items } = this.props;
        const elements = items.map((item) => {
            const { id, ...itemProps } = item;
            return (
                <li key={id}>
                    <Cocktail {...itemProps} />
                </li>
            );
        });
        return (
            <div className={styles.cocktail_list_wrapper}>
                <ul className={styles.main_cocktail_list}>
                    {elements}
                </ul>
            </div>
        );
    }
}

CocktailList.propTypes = {
    items: PropTypes.node.isRequired,
};
