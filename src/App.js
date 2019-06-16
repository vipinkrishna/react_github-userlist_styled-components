import React, {Component} from 'react';
import Details from './Details';
import styled from 'styled-components';

const UsersList = styled.div`
  margin: 10px;
  box-shadow: 0 0 2px rgba(0,0,0,0.5);
  border-radius: 5px;
  padding: 5px;
  width: 300px;
  h1 {
    text-align: center;
    color: #999;
  }
`
const ULusersList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    background-color: #fff;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 0 5px 1px rgba(0,0,0,0.2);
  }
  li:hover {
    background-color: #fff;
    box-shadow: 0 0 15px 1px rgba(0,0,0,0.2);
  }
`

const Error = styled.h3`
  text-align: center;
  color: red;
`

class App extends Component {
  constructor() {
    super();
    this.state = {
      usersData: [],
      selectedUser: null,
      error: null
    };
  }

  handleClick = (id) => {
    const selectedUser = this.state.usersData.find(user => user.id === id)
    this.setState({selectedUser})
  }

  

  render() {
    const usersList = this.state.usersData.map(user => {
      return <li key={user.id} onClick={()=>this.handleClick(user.id)}>{user.login}</li>
    })
    return (
      <>
          <UsersList>
            <h1>Github Users</h1>
            <ULusersList>{usersList.length ? usersList : <Error>{this.state.error}</Error>}</ULusersList>
          </UsersList>
          <Details user={this.state.selectedUser} />
      </>
    )
  }

  componentDidMount() {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({usersData: data})
        })
      .catch(err => this.setState({error: err.message + "!"}))
  }
}

export default App;
