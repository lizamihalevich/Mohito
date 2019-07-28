import React, { Component } from 'react';
import PropTypes from 'react-proptypes';
import styles from './cocktail.styles.pcss';

export default class Cocktail extends Component {
    render() {
        const { name, url } = this.props;
        return (
            <div className={styles.main_cocktail}>
                <h3>{name}</h3>
                <img className={styles.image_cocktail} src={url} alt="" />
            </div>
        );
    }
}

Cocktail.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
