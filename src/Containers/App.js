import React, {Component} from 'react';
import CardList from '../Components/CardList';
//import { robots } from './robots';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll'
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
           .then(response=> response.json())        
           .then(users => this.setState({robots: users}));   
        
        
    }

    onSearchChange = (event) =>{
        this.setState({ searchfield: event.target.value})
      
    }

    render(){
        const { robots, searchfield} = this.state;
        const filterRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return !robots.length ?
            <h1>Loading Robots please wait!</h1> :
        
        (
            <div className='tc'>
            
            <h1 className='f1'>Robo Friends</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filterRobots}/>
            </Scroll>
            </div>
        );
       
    
 
   
}
}

export default App;