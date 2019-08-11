import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts=()=>
  async(dispatch)=>{                                          //hooking up middleware(9redux-thunk)
                                                             //to the
    const response=await jsonPlaceholder.get('/posts');      //redux store
    dispatch({type:'FETCH_POSTS',
              payload: response.data
  });                                                        //......

    };

export const fetchPostsAndUsers=()=>async (dispatch, getState)=>{

    await dispatch(fetchPosts());
    const userId= _.uniq(_.map(getState().posts, 'userId'));
    console.log(userId);
}

export const fetchUser=(id)=>async dispatch=>{
         const response=await jsonPlaceholder.get(`/users/${id}`);
                        dispatch({type:'FETCH_USER',
                                  payload: response.data
                     });
     };



