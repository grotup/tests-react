import React, { Component } from 'react';

class TopNavBar extends Component {
    render(){
        return (
            <div className="TopNavBar">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> 
                                <span className="sr-only">Toggle navigation</span> 
                                <span className="icon-bar"></span> 
                                <span className="icon-bar"></span> 
                                <span className="icon-bar"></span> 
                            </button> 
                            <a href="#" className="navbar-brand">React-Rss</a> 
                        </div>
                        <ul className="nav navbar-nav"> 
                            {/*<li className="active">
                                <a href="#">Link <span className="sr-only">(current)</span>
                                </a>
                            </li> 
                            <li>
                                <a href="#">Link</a>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

module.exports = TopNavBar;