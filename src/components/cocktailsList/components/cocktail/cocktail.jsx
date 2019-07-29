import React, { Component } from 'react';
import PropTypes from 'react-proptypes';
import styles from './cocktail.styles.pcss';

class Cocktail extends Component {
    render() {
        const { name, url } = this.props;
        return (
            <div className={styles.main_cocktail}>
                <h3 className={styles.main_cocktail__name}>{name}</h3>
                <img className={styles.main_cocktail__image} src={url} alt="" />
            </div>
        );
    }
}

Cocktail.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default Cocktail;
