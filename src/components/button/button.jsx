//react button component that will be reused in the form page boostrap classes are used to style the button

import PropTypes from 'prop-types';

const Button = ({ text, className, onClick }) => {
    return (
        <button className={`btn btn-success ${className}`} onClick={onClick}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default Button;
