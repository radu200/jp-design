import PropTypes from 'prop-types';
import '../scss/components/ShowCase.scss';

export default function ShowCase({ src, alt }) {
  return <img className='show-case' src={src} alt={alt} />;
}

ShowCase.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
};
