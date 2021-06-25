import PropTypes from 'prop-types';
import '../scss/components/Button.scss';

export default function Button({ onClick, title, className }) {
  return (
    <button className={`btn-primary ${className}`} onClick={onClick}>
      {title}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  className: PropTypes.string,
};
