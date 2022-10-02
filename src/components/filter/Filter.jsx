import PropTypes from 'prop-types';
import {InputField, Lable} from './Filter.styled'

export const Filter = ({ onChange }) => {
  // виводимо в поле input введені дані  на основі яких буде фільтруватись та рендеритись тел книга
    return ( <Lable>
          Find contacts by name
          <InputField
            type="text"  onChange={onChange}
          />
        </Lable>);
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}