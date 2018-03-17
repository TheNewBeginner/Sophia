import React from "react";
import "../css/BookHub.css";
import divider from "semantic-ui-react";        


const BookHub = () => (
<div>
    <div className="bookpage_wrap">
        <div className="banner">
            <div className="banner-title">
            <a className="header-home" href="/">SOPHIA 1.0</a>
                <p>BOOKHUB</p>
            </div>
        </div>
    </div>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="sub-text">
                            <p className="page-title">LECTURE NOTES AND MATERIALS</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </section>
        <section>
            <div className="container">
                <div className="row ui three cards">
                    <div className="col-sm">
                        <div className="ui raised card">
                            <div className="content">
                                <div className="header-title header-color"><h3>FIRST YEAR</h3></div>
                                <img src="logo.jpg" alt />
                            </div>
                            <div className="content">
                                <h4 className="ui sub-header">information technology/computer science</h4>
                                <table className="table table-responsive">
                                    <tbody>
                                        <tr>
                                            <td><i className="fa fa-book fa-2x"></i></td>
                                            <td>TOTAL COURSES</td>
                                            <td>14</td>
                                        </tr>
                                        <tr>
                                            <td><i className="fa fa-user-secret fa-2x"></i></td>
                                            <td>LEVEL ADVISER</td>
                                            <td>Mr. AMAKU AMAKU</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="extra content">
                                <button className="ui button">ENTER</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="ui raised card">
                            <div className="content">
                                <div className="header-title header-color"><h3>FIRST YEAR</h3></div>
                                <img src="logo.jpg" alt />
                            </div>
                            <div className="content">
                                <h4 className="ui sub-header">information technology/computer science</h4>
                                <table className="table table-responsive">
                                    <tbody>
                                        <tr>
                                            <td><i className="fa fa-book fa-2x"></i></td>
                                            <td>TOTAL COURSES</td>
                                            <td>14</td>
                                        </tr>
                                        <tr>
                                            <td><i className="fa fa-user-secret fa-2x"></i></td>
                                            <td>LEVEL ADVISER</td>
                                            <td>Mr. AMAKU AMAKU</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="extra content">
                                <button className="ui button">ENTER</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="ui raised card">
                            <div className="content">
                                <div className="header-title header-color"><h3>FIRST YEAR</h3></div>
                                <img src="logo.jpg" alt />
                            </div>
                            <div className="content">
                                <h4 className="ui sub-header">information technology/computer science</h4>
                                <table className="table table-responsive">
                                    <tbody>
                                        <tr>
                                            <td><i className="fa fa-book fa-2x"></i></td>
                                            <td>TOTAL COURSES</td>
                                            <td>14</td>
                                        </tr>
                                        <tr>
                                            <td><i className="fa fa-user-secret fa-2x"></i></td>
                                            <td>LEVEL ADVISER</td>
                                            <td>Mr. AMAKU AMAKU</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="extra content">
                                <button className="ui button">ENTER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</div>
);
export default BookHub;