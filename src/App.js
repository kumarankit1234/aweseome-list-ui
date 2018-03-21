import React, { Component } from 'react';
import axios from 'axios';

import Header from './Components/Header';
import Search from './Components/Search';
import List from './Components/List';
import ListData from './Components/ListData';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        loading: false,
        data: [],
        searchLoading: false,
        showList: false
    };

    componentDidMount() {
        axios({
            url: 'http://learning.us-3.evennode.com/'
        }).then(res => {
            this.setState({
                loading: false,
                data: res.data
            });
        });
    }

    handleSearch = value => {
        this.setState({ searchLoading: true });
        let url;
        let method;
        if (value) {
            url = 'http://learning.us-3.evennode.com/search';
            method = 'POST';
        } else {
            url = 'http://learning.us-3.evennode.com/';
            method = 'GET';
        }
        axios({
            url,
            data: {
                query: value
            },
            method
        }).then(res => {
            this.setState({
                searchLoading: false,
                data: res.data
            });
        });
    };

    handleClick = (list) => {
        this.setState({ showList: list })
    }

    handleCloseShow = () => {
        this.setState({
            showList: false
        })
    }

    render() {
        const { loading, data, showList } = this.state;
        return (
            <div className="App">
                {loading ? (
                    <div> Loading</div>
                ) : (
                        <div>
                            <Header count={data.length} />
                            <Search onSearch={this.handleSearch} />
                            {showList && <ListData list={showList} onClick={this.handleCloseShow} />}
                            {!showList && <div className="lists">
                                {data.map(repo => <List list={repo} onClick={this.handleClick} />)}
                            </div>}
                        </div>
                    )}
            </div>
        );
    }
}

export default App;
