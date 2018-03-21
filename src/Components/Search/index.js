import React, { Component } from 'react';

import './search.css';

class Search extends Component {
    handleSearch = e => {
        const value = e.target.value;
        this.props.onSearch(value);
    };
    render() {
        const { onSearch } = this.props;
        return (
            <div className="search-bar">
                <input
                    placeholder="Search lists"
                    onChange={this.handleSearch}
                />
                <i className="fa fa-search search-icon" />
            </div>
        );
    }
}

export default Search;
