import React, { Component } from 'react';

var UserData = React.createClass({

    render: function() {
        return (
            <tr>
                <td>
                    <img src="images/owl.svg" className="user-image"/>
                </td>
                <td>{this.props.userData.id}</td>
                <td>{this.props.userData.age}</td>
                <td>{this.props.userData.phone}</td>
            </tr>
        );
    }
});

UserData.propTypes = {
    userData: React.PropTypes.object
};

UserData.defaultProps = {
    userData: {}
};

export default UserData;