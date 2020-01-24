import React from 'react';
import './App.css';
import List from './List';
import './List.css';
import './Listitem.css';

class App extends React.Component {

state = {
  users : [],
  userscopy : [],
  followers :[],
  repo : [],
  subscriptions :[]
}



getdataFromChild = (followers,repo,subscriptions) => {
this.setState({followers,repo,subscriptions})

}
handleonchange = (searchvalue) => {
  this.setState({users:this.state.userscopy.filter(ele => ele.login.startsWith(searchvalue))})
  
} 
  

   componentWillMount(){
    fetch('https://api.github.com/users').then(res => res.json()).then(res => {
        this.setState({users: res, userscopy:res})
       

    })
    
   }

  
   
  render() {
      return (
      <List users = {this.state.users} handleonchange = {this.handleonchange} getdataFromChild = {this.getdataFromChild}></List>
      
      );

    };
  
}


export default App;
