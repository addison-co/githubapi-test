import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './style.scss';
import Axios from 'axios';

const UserDetailView = ({ match }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const history = useHistory();
  const userId = match.params.id;

  useEffect(() => {
    const getUserInfo = async () => {
      await Axios.get(`https://api.github.com/users/${userId}`)
        .then(response => {
          setUserInfo(response.data);
        })
        .catch(console.error);

      await Axios.get(`https://api.github.com/users/${userId}/repos`)
        .then(response => {
          setUserRepos(response.data);
        })
        .catch(console.error);
    };

    getUserInfo();
  });

  if (!userInfo) return <div className="UserDetailView"> Loading ••• </div>;
  return (
    <div className="UserDetailView">
      <div className="userInfo">
        <img src={userInfo.avatar_url} alt="avatar" className="avatar" />
        <span className="name">{userInfo.name}</span>
        <button
          className="backBtn"
          onClick={() => {
            history.push('/users');
          }}
        >
          Back to List
        </button>
      </div>
      <div className="userRepos">
        {userRepos ? (
          <table>
            <thead>
              <tr>
                <th>Repository Name</th>
                <th>Repository Link</th>
              </tr>
            </thead>
            <tbody>
              {userRepos.map(repo => {
                return (
                  <tr key={repo.id}>
                    <td>{repo.name}</td>
                    <td>{repo.html_url}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div> Loading Repositories ••• </div>
        )}
      </div>
    </div>
  );
};

export default UserDetailView;
