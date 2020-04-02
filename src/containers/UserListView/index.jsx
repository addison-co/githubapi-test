import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import './style.scss';
import UserCard from '../../components/UserCard';

const UserListView = () => {
  const [userList, setUserList] = useState(null);

  useEffect(() => {
    const getUserList = async () => {
      await Axios.get('https://api.github.com/users')
        .then(response => {
          setUserList(response.data);
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    };

    getUserList();
  }, []);

  if (!userList) return <div className="UserListView"> Loading ••• </div>;
  return (
    <div className="UserListView">
      <div className="Content">
        {userList.map(user => (
          <UserCard key={user.id} userInfo={user} className="singleUser" />
        ))}
      </div>
    </div>
  );
};

export default UserListView;
