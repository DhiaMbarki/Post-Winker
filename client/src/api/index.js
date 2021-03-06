import axios from 'axios'; //we gonna use it to make api call

const url = 'http://localhost:5000/posts';// return all the posts we have on the data base


export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
