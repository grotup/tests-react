import React, { Component } from 'react';

class ReactRssList extends Component {

    constructor(props){
        super(props);
        this.state = {
            articles : [
                { title : 'Article 1'},
                { title : 'Article 2'},
                { title : 'Article 3'},
                { title : 'Article 4'},
                { title : 'Article 5'},
                { title : 'Article 6'},
                { title : 'BONJOUR !'},
            ]
        }
    }

    render(){
        return (
            <div className="App">
                {this.state.articles.map(function(element){
                    return <li key={element.title} className="list-group-item">{element.title}</li>
                })}
            </div>
        );
    }
}

module.exports = ReactRssList;