import React, { Component } from 'react';
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'


class App extends Component {
    constructor() {
        super()
        this.state = {
            actors: []
        }
    }

    componentDidMount(){
        fetch('https://swapi.co/api/people')
        .then(response => response.json())
        .then(users => {this.setState({actors:users.results})})
        
       
    }

   
    render() {
        const {actors} = this.state
        return !actors.length ?
        <h1>Loading</h1>:
            (
                <div className='tc'>
                    <h1 className='f1'>Star Wars Character</h1>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList actors={actors}/>
                        </ErrorBoundry>
                    </Scroll>
                </div> 
            );
        }
    }

export default App;