import React, { Component } from 'react';

const ToolBar = () => {
    return (
        <div className="toolbar">
            <button className="btn btn-default">
                <i className="icon fa fa-sort-alpha-asc"></i>
                <span> Sort by name</span>
            </button>
            <button className="btn btn-default">
                <i className="icon fa fa-sort-numeric-desc"></i>
                <span> Sort by age</span>
            </button>
        </div>
    );
};


export default ToolBar;
