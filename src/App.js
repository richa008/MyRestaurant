import React, { Component } from 'react';
import Main from './components/Main';
import './App.css';
import { Dishes } from './shared/dishes';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: Dishes
        }
    }

    render() {
        return (
            <div className="App">
                <Main />
            </div>
        );
    }
}

export default App;
