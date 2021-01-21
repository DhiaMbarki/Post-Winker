import * as api from '../api/index.js';
 // '*' aloud us to import everything from the action us api


//Action Creators

export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
  
      dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };