import React from 'react';
import './List.css';
import App from './App.js';
import Listitem from './Listitem';



class List extends React.Component {

    state = {
 
        showlist : false

    }
    
   handleOnFocus = () => {

    this.setState ({showlist:true})


   }

   handleOnBlur = () => {


    // this.setState ({showlist:false})

   }
    render() {
        
     //verify user - need to write function to verify user // - need to pass this to list item
    return (
        <div >
        <div id='id'>
       <input type='search' id='search'
        onChange={(e)=>this.props.handleonchange(e.target.value)}
        onFocus={this.handleOnFocus}
        onBlur={this.handleOnBlur}
        placeholder='Searching the list...'
        />
        </div>
        <ul>
        {this.state.showlist && this.props.users.map((user,index)=> {
            return <Listitem key = {index} users = {user.login} avatar = {user.avatar_url} 
            
            followers = {user.followers_url} repo ={user.repos_url} subscription ={user.subscriptions_url} getdataFromChild = {this.props.getdataFromChild}></Listitem>;
        })}
    </ul>
    </div>
    );
       
    }
   
}


export default List;