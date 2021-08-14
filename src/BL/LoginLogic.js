import axios from '../api/axios';
import { authenticate } from '../api/connectionData.json';
import store from '../stateManagment/store/store';
import { userConnect } from '../stateManagment/actions/actions';

export const attemptLoginStatusEnum = {
  wrongDetails: 0,
  badConnection: 1,
  succussLogin: 2,
  generalError: 3,
};

export const AttemptLogin = async (email, password) => {
  try {
    var response = await axios.post(authenticate, {
      Email: email,
      Password: password,
    });
    const { data } = response;
    store.dispatch(userConnect(data));
    return attemptLoginStatusEnum.succussLogin
  } catch (error) {
    //received response from server
    if (error.response && error.response.status !== 404) {
      console.log("first", error.response.status)
      return attemptLoginStatusEnum.wrongDetails;
      //The request was made but no response was received
    } else if (error.request || error.response.status === '404') {
      console.log(error.request)
      return attemptLoginStatusEnum.badConnection;
    } else {
      return attemptLoginStatusEnum.generalError;
    }
  }
};
