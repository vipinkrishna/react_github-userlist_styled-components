import React from 'react';
import styled from 'styled-components'
import Avatar from './avatar.png'

const UserDetails = styled.div`
  /* flex: 1; */
  height: 316px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 320px;
  margin: 10px;
  margin-left: 5px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(0,0,0,0.5);
  h1 {
    color: #999;
    margin-top: 0;
    margin-bottom: 0;
  }
  @media (max-width: 550px) {
    margin-left: 10px;
    position: sticky;
    left: 0;
  }
`

const UserField = styled.div`
  font-weight: bold;
  color: #999;
`

const UserAvatar = styled.img`
  display: block;
  margin-top: 10px;
  width: 175px;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 0 15px 1px rgba(0,0,0,0.2);
  /* opacity: 0.2; */
`

const UserInfo = styled.div`

`

export default ({ user }) => {
  const userInfo = <UserInfo>
    <UserField>Name: {user ? user.login : null}</UserField>
    <UserField>Id: {user ? user.id : null}</UserField>
    <UserAvatar src={user ? user.avatar_url : Avatar} alt={user ? user.login : null} />
  </UserInfo>
  return <>
    <UserDetails>
      <h1>User Details</h1>
      {userInfo}
    </UserDetails>
  </>
}