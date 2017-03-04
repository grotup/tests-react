import React, { Component } from 'react';
import ReactRssHeader from './ReactRssHeader';
import ReactRssList from './ReactRssList';

class ReactRss extends Component {

    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return (
            <div className="App">
                <h1>React-rss</h1>
                <ReactRssHeader/>
                <ReactRssList/>
            </div>
        );
    }
}

module.exports = ReactRss;