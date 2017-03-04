import React, { Component } from 'react';

class Sidebar extends Component {

    render(){
        var that = this;
        return (
        <ul className="nav nav-pills nav-stacked">
            {this.props.feeds.map(function(element){
                return <li key={element.url} className={"presentation " + (element.selected ? 'active': '')}><a href="#">{element.title}</a></li>
            })}
        </ul>);
    }
}

module.exports = Sidebar;