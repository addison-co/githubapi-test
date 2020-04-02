import React from 'react';

import './style.scss';
import { useHistory } from 'react-router-dom';

const UserCard = ({ userInfo }) => {
  const history = useHistory();

  return (
    <div
      className="UserCard"
      onClick={() => {
        history.push(`/user/${userInfo.login}`);
      }}
    >
      <img src={userInfo.avatar_url} alt="avatar" className="avatar" />
      <span className="userId">{userInfo.login.toUpperCase()}</span>
      <a
        href={userInfo.html_url}
        rel="noopener noreferrer"
        target="_blank"
        className="githubLink"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        View Github Profile
      </a>
    </div>
  );
};

export default UserCard;
