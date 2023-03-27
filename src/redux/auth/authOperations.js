import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl, token } from '../tokenSettingsAxios';
import { Notify } from 'notiflix';


const register = createAsyncThunk(
  'auth/register',
  async (credential, thunkAPI) => {
    const { email, password, username } = credential;

    try {
      const { data } = (await axiosBaseUrl.post('/auth/register', {
        email,
        password,
        username,
      }));

      return data;
    } catch (e) {
      if (e instanceof Error) {
        Notify.failure(e.message);
        return thunkAPI.rejectWithValue(e.message);
      }

      return thunkAPI.rejectWithValue('Unknown error');
    }
  }
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credential, thunkAPI) => {
    const { email, password } = credential;

    try {
      const { data } = (await axiosBaseUrl.post('/auth/login', {
        email,
        password,
      }));
      token.set(data.accessToken);

      return data;
    } catch (e) {
      if (e instanceof Error) {
        Notify.failure(e.message);
        return thunkAPI.rejectWithValue(e.message);
      }

      return thunkAPI.rejectWithValue('Unknown error');
    }
  }
);

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axiosBaseUrl.post('/auth/logout');
    token.unset();
  } catch (e) {
    if (e instanceof Error) {
      Notify.failure(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }

    return thunkAPI.rejectWithValue('Unknown error');
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
};

export default authOperations;
