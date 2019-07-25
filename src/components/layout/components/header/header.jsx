import React, { Component } from 'react';
import PropTypes from 'react-proptypes';
import styles from './header.styles.pcss';

class Header extends Component {
    render() {
        const { text } = this.props;
        return (
            <div className={styles.main}>
                {text}
            </div>
        );
    }
}

Header.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Header;
