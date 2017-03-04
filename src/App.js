import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './Components/Sidebar';
import ReactRss from './Components/ReactRss';
import TopNavBar from './Components/TopNavBar';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      feeds : [
          { selected: true, title: 'Feed 1', url: 'Url1', articles : [
                { title : 'Article 1'},
                { title : 'Article 2'},
                { title : 'Article 3'},
                { title : 'Article 4'},
                { title : 'Article 5'},
                { title : 'Article 6'},
                { title : 'BONJOUR !'},
            ]},
          { selected: false, title: 'Feed 2', url: 'Url2', articles : [
                { title : 'Article 1'},
                { title : 'Article 2'},
                { title : 'Article 3'},
                { title : 'Article 4'},
                { title : 'Article 5'},
                { title : 'Article 6'},
                { title : 'BONJOUR !'},
            ]},
          { selected: false, title: 'Feed 3', url: 'Url3', articles : [
                { title : 'Article 1'},
                { title : 'Article 2'},
                { title : 'Article 3'},
                { title : 'Article 4'},
                { title : 'Article 5'},
                { title : 'Article 6'},
                { title : 'BONJOUR !'},
            ]},
          { selected: false, title: 'Feed 4', url: 'Url4', articles : [
                { title : 'Article 1'},
                { title : 'Article 2'},
                { title : 'Article 3'},
                { title : 'Article 4'},
                { title : 'Article 5'},
                { title : 'Article 6'},
                { title : 'BONJOUR !'},
            ]},
      ]
    }
  }

  render() {
    return (
      <div >
        <TopNavBar/>
        <div className="container">
          <div className="col-md-3">
            <Sidebar feeds={this.state.feeds}/>
          </div>
          <div className="col-md-9">
            <ReactRss feeds={this.state.feeds}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
