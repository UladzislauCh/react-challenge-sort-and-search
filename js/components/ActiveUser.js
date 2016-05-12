import React, { Component } from 'react';

export default class ActiveUser extends Component {
    render() {
        return (
            <div className="thumbnail">
                <img src="images/dog.svg" />
                <div className="thumbnail-caption">
                    <h3>Tyler Herrera</h3>
                    <table className="user-info table table-responsive">
                        <tbody>
                        <tr>
                            <td>Age:</td>
                            <td>54</td>
                        </tr>
                        <tr>
                            <td>Favorite animal:</td>
                            <td>dog</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>8</td>
                        </tr>
                        </tbody>
                    </table>

                    <p>
                        <b>Favorite phrase:</b>
                        <span>Ewetovuv gebuw kaaniosu vizuk upe hafe aguhuh agevamu dom humo ciasa gairji ufvisso je poz.</span>
                    </p>
                </div>
            </div>
        );
    }
}
