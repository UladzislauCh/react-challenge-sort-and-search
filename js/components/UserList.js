import React, { Component } from 'react';
import UserData from './UserData.js';

export default class UserList extends Component {
    constructor(props) {
        super(props);

        var oReq = new XMLHttpRequest();
        oReq.onload = this.reqListener.bind(this);
        oReq.open("get", "../data.json", true);
        oReq.send();

        this.state = {
            data: {}
        }
    }

    reqListener(data) {
        this.setState({data: JSON.parse(data.currentTarget.responseText)})
    }

    render() {
        var listItems = [].map.call(this.state.data, (userData) => {
            return <UserData key={userData.id} userData={userData}/>;
        });
        return (
            <div>
                <table className="user-list table table-striped">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>{listItems}</tbody>
                </table>
            </div>
        );
    }
}