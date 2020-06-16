import { POST_TMDB_CONFIG } from '../actions/types';

const initialState = {
  apiKey: 'f2862f705271058bc0d26b6b2e73af10'
};

const postTMDBConfig = (state = initialState, action) => {
  switch (action.type) {
    case POST_TMDB_CONFIG:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export default postTMDBConfig;
