import PropTypes from 'prop-types';

const SearchInput = ({ searchTerm, handleChange, filter }) => {
    return (
        <form className="photo-stream__form">
            <div className="form__container">
                <label htmlFor="tag-search">Search Tags </label>
                <input type="text" name="tag-search" placeholder="Search photo tags" aria-label="tag-search" value={searchTerm} onChange={handleChange} filter={filter} />
            </div>
        </form>
    )
}

SearchInput.propTypes = {
    searchTerm: PropTypes.string,
    handleChange: PropTypes.func,
    filter: PropTypes.func
}

export { SearchInput as default };