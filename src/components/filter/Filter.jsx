import PropTypes from 'prop-types';

export const Filter = ({ onChange}) => {
    return ( <label>
          Find contacts by name
          <input
            type="text"  onChange={onChange}
          />
        </label>);
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}