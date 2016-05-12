import React, { Component } from 'react';

var SearchBar = React.createClass({

    render: function() {
        return (
            <input type="text" className="form-control" placeholder="Search people by name..." />
        );
    }
});

export default SearchBar;
