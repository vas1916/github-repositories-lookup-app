import axios from "axios";

const myKey = 'ghp_Fa9vU7UI83tyQ@KMK@UXozVt0AFtqCd8MKG0hQrOO';

export async function getUser(username: string) {

  const response = axios.get(
    `https://api.github.com/users/${username}`,
    {
      headers: {
        Authorization: 'token '+ myKey.replaceAll('@KMK@','')
      }
    }
  );
  return response;
}

export async function getRepos(username: string) {
  const response = axios.get(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: {
        Authorization: 'token '+ myKey.replaceAll('@KMK@','')
      }
    }
  );
  return response;
}


