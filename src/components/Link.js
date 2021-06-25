import PropTypes from 'prop-types';
import '../scss/components/Link.scss';

export default function Link({ url, title, className }) {
  return (
    <a className={`redirect-link ${className}`} href={url}>
      {title}
    </a>
  );
}

Link.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};
