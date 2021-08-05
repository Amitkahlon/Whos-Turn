import { USER_CONNECT, USER_DISCONNECT } from './actionTypes';

export const userConnect = (user) => ({
  type: USER_CONNECT,
  user,
});

export const userDisconnect = () => ({
  type: USER_DISCONNECT,
});
