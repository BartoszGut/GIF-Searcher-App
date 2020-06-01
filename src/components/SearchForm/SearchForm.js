import React from 'react';

const SearchForm = (props) => {
    return (
        <div className="form-container">
            <form onSubmit={props.submit}>
                <input
                    type="text"
                    value={props.value}
                    onChange={props.change}
                    placeholder="Place your gif phrase..."
                />
                <div className="button-container">
                    <button>Search</button>
                    <button onClick={props.reset}>Reset</button>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;