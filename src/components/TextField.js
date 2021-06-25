import PropTypes from 'prop-types';
import '../scss/components/TextField.scss';

export default function TextField({
  onChange,
  placeholder,
  type,
  label,
  id,
  iconName,
}) {
  return (
    <div className='text-field-container'>
      <label className='text-field-label' htmlFor={id}>
        {label}
      </label>
      <div className='text-field-wrapper'>
        <input
          id={id}
          className='text-field'
          type={type}
          onChange={onChange}
          placeholder={placeholder}
        />
        {iconName ? (
          <span className='material-icons md-48 text-field-icon'>
            {iconName}
          </span>
        ) : null}
      </div>
    </div>
  );
}

TextField.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  iconName: PropTypes.string,
};
