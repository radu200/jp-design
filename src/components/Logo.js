import PropTypes from 'prop-types';
import '../scss/components/Logo.scss';

export default function Logo({ src, alt }) {
  return <img className='logo' src={src} alt={alt} />;
}

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
