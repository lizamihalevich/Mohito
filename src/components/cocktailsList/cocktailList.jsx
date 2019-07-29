import React, { Component } from 'react';
import PropTypes from 'react-proptypes';
import { connect } from 'react-redux';
import { getCocktails } from 'resources/cocktail/cocktail.selectors';
import { fetchCocktails } from 'resources/cocktail/cocktail.actions';
import styles from './coctaillist.styles.pcss';
import Cocktail from './components/cocktail';

class CocktailList extends Component {
    componentDidMount() {
        const {
            fetchCocktails: loadCocktails,
        } = this.props;
        loadCocktails();
    }

    render() {
        const {
            cocktailList,
        } = this.props;
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

CocktailList.propTypes = {
    cocktailList: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
    })).isRequired,
    fetchCocktails: PropTypes.func.isRequired,
};

export default connect((state, props) => ({
    cocktailList: getCocktails(state),
}), {
    fetchCocktails,
})(CocktailList);
