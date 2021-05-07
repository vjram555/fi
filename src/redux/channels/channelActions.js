import axios from 'axios';
import {
  FETCH_CHANNEL_REQUEST,
  FETCH_CHANNEL_SUCCESS,
  FETCH_CHANNEL_FAILURE,
  UPDATE_CHANNEL_COUNT,
  UPDATE_CHANNEL_LIST
} from './channelTypes';

export const fetchChannel = () => {
  return (dispatch) => {
    dispatch(fetchChannelRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(fetchChannelSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchChannelFailure(error.message))
      })
  }
}

export function updateSelectedChannels(payload) {
  return {
    type: UPDATE_CHANNEL_COUNT,
    payload: payload,
  };
}

export function selectedChannelsList(payload) {
  return {
    type: UPDATE_CHANNEL_LIST,
    payload: payload,
  };
}

export const fetchChannelRequest = () => {
  return {
    type: FETCH_CHANNEL_REQUEST
  }
}

export const fetchChannelSuccess = channel => {
  return {
    type: FETCH_CHANNEL_SUCCESS,
    payload: channel
  }
}

export const fetchChannelFailure = error => {
  return {
    type: FETCH_CHANNEL_FAILURE,
    payload: error
  }
}
