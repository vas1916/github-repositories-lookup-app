import React, { FunctionComponent, useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getRepos } from '../API/services';
import { User } from '../Types/UserRepositoriesTypes';
import { RepositoryList } from './RepositoryList';

export const Repositories: FunctionComponent<User> = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [repositories, setRepositories] = useState([]);
  
  const getRepositories = () => {
  
    getRepos(props.user).then((response)=>{
      setRepositories(response.data);
      setIsLoaded(true);
      setTimeout(getRepositories, 15000);
    }).catch(
      ()=>{
        setRepositories([]);
      setIsLoaded(true);
      }
    );

    }
  
  useEffect(() => {
    if (props.user) getRepositories();
  }, [props.user]);
  
  if (!isLoaded) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }
  
  return (
    <>
      {repositories.length > 0 ? (
        <RepositoryList repositories={repositories} />
      ) : (
        <>No repositories found for given user</>
      )}
    </>
  );
};
