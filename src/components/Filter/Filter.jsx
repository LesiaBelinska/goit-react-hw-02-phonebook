import { nanoid } from "nanoid";
import PropTypes from 'prop-types';

const filterInputId = nanoid();

const Filter = ({ value, onChange }) => {
    return (
        <div>
            <label htmlFor={filterInputId}>Find contacts by name</label>
            <input type="text"
                id={filterInputId}
                value={value}
                onChange={onChange}
            />
        </div>

    );
};

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}