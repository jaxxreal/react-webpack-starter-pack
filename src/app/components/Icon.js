import React, { PropTypes } from 'react';
import cx from 'classnames';

export default function Icon({ glyph, width = 16, height = 16, className = 'icon' }) {
    return (
        <svg className={ cx('icon', className) } width={ width } height={ height }>
            <use xlinkHref={ glyph }/>
        </svg>
    );
}

Icon.propTypes = {
    glyph: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ]),
};
