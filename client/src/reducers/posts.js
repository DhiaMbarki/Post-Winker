// const reducer = (state, action) => {
//     if(action.type === 'CREATE') {
//         return action
//     }
// }

export default(posts = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL': 
              return action.payload;     
        case 'CREATE':
              return posts;
        default:
              return posts;

    }
}