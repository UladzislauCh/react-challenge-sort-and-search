import React, { Component } from 'react';
import UserData from './UserData';

const UserList = () => {
    return (
        <table className="user-list table table-striped">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
            <UserData />
            </tbody>
        </table>
    );
};


export default UserList;