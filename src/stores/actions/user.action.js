// import { Post } from '../../utils/apiCalls/apiCalls'
import { Post, Get } from '../../utils/apiCalls/apiCalls'
import {
  All_EVENTS,
  All_EVENTS_FAILED,
  All_EVENTS_SUCCESS,
  LOGIN,
} from './actionType'


// export const LoginAction = (data, navigation) => {

//   return dispatch => {
//     dispatch({ type: LOGIN })
//     Post('api/login', data, false)
//       .then(function (response) {
//         if (response.status === 1) {
//           dispatch({
//             type: LOGIN_SUCCESS,
//             payload: response?.data
//           })
//           console.log(response.message, "success")
//           // dispatch(IsLoggedInAction())
//           navigation.navigate('AppStackNavigator', {
//             screen: 'Home'
//           });
//         } else {
//           console.log(response.message)
//           dispatch({ type: FETCH_USER_FAILED })
//         }
//       }).catch((err) => console.log(err.response.data.message, "error"));
//   }
// }


export const AllEvents = () => {
  return dispatch => {
    dispatch({ type: All_EVENTS });
    Get('wp-json/wc/v3/products', 'ck_79ca984282b49d196318c43202a8f4a17e82ddca', 'cs_1eb1e1fe248d916fc45c74671eee12edeaa936e8')
    .then(function (response) {
      if (response) {
        dispatch({ type: All_EVENTS_SUCCESS, payload: response })
      } else {
        dispatch({ type: All_EVENTS_FAILED })
      }
    })
    .catch(function (error) {
      console.log(error, 'error')
      dispatch({ type: All_EVENTS_FAILED })
    });
  }
}

//========================================

export const SignUpAction = (userData, navigation) => {

  return dispatch => {
    dispatch({ type: USER_SIGNUP });
    Post('api/register', userData)
      .then(function (response) {
        console.log('response', response);
        if(response.status === 1) {
           dispatch({
            
             type: USER_SIGNUP_SUCCESS,
             payload: response

            })
          }
         }).catch(function (error) {
          if (error) {
             console.log(error.response.data.message, 'Error');
           }
        })
  }
}





