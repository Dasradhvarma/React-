import React from 'react';
import List from './List';
import './Listitem.css';

class Listitem extends React.Component {

  state = {
    display: false,
    users: [],
    followers:[],
    subscriptions: [],
    repos: []
   
  }
  
  HandleonClick = () => {

    this.setState({ display: true })

  }

  componentDidMount() {
    fetch(this.props.followers).then(res => res.json()).then(followers => {
      fetch(this.props.subscription).then(res => res.json()).then(subscriptions => {
        fetch(this.props.repo).then(res => res.json()).then(repos => {
          this.setState({followers,subscriptions,repos})
          this.props.getdataFromChild(followers,subscriptions,repos) 
        })
      })
    })
  }
 /*  getFollowers = () => {

    fetch(this.props.followers).then(res => res.json()).then(res => {
      this.setState({ followers: res })
      this.props.getdataFromChild(res)
    })
  }
  getsubscription = () => {
  
    fetch(this.props.subscription).then(res => res.json()).then(res => {
      this.setState({ subscriptions: res })
      this.props.getdataFromChild(res)
    })
  }

  getrepo = () => {
     
    fetch(this.props.repo).then(res => res.json()).then(res => {
      this.setState({ repos: res })
      this.props.getdataFromChild(res)
    })
  }  */

  onMousehandle = () => {
    this.setState({ display: false })
  }

  
  render() {

    return <li className='list'  >
      <div onMouseEnter={this.HandleonClick} onMouseLeave={this.onMousehandle}>
        {this.props.users}
       {/*  
          <div>1.<a onClick={this.getFollowers}>followers</a></div>
          <div>2.<a onClick={this.getsubscription}>Subscription</a></div>
          <div>3.<a onClick={this.getrepo}>Repo</a></div> */}
        
      </div>
    <div>
      <h1>Followers</h1>
      {this.state.followers.map(ele => <div>{ele.login}</div>)}
      </div>
      <div>
      <h1>subscriptions</h1>
      {this.state.subscriptions.map(ele => <div>{ele.name}</div>)}
      </div>
      <div>
      <h1>Repos</h1>
      {this.state.repos.map(ele => <div>{ele.name}</div>)}
      </div>

      {this.state.display ? <img className='img' src={this.props.avatar} /> : ""}


    </li>
    //button here - need to call this.props.verifyuser - which pass the id -------//  on line 59
  }

}

export default Listitem;