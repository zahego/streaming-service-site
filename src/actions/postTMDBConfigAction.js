import { POST_TMDB_CONFIG } from './types.js';

const saveTMDBConfig = payload => ({
  type: POST_TMDB_CONFIG,
  payload
});

export const postTMDBConfig = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveTMDBConfig(data)))
    .catch(error => console.log(error));
  }
};
