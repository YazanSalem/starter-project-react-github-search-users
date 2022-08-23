import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

//GithubContext has Provider, Consumer

//Returns Consumer
const GithubProvider = ({children}) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setGithubRepos] = useState(mockRepos);
    const [followers, setGithubFollowers] = useState(mockFollowers);

    return (
    <GithubContext.Provider value={{githubUser, repos, followers}}>
        {children}
    </GithubContext.Provider>
    );
};

export {GithubProvider, GithubContext}