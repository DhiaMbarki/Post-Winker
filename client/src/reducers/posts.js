// const reducer = (state, action) => {
//     if(action.type === 'CREATE') {
//         return action..
//     }
// }

export default (posts = [], action) => {
      switch (action.type) {
            case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);   
            case 'UPDATE':

              return posts.map((post) => post._id === action.payload._id ? action.payload : post);     
        case 'CREATE':
              return [ ...posts, action.payload];
        default:
              return posts;

    }
}