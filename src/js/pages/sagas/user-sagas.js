import {fork, all, take, call, put, actionChannel} from 'redux-saga/effects';
import {handleApiErrorAction} from '../../utils/api-util';

import {userSignUpSuccess} from '../actions/user-actions';
import {userSignUp} from '../services/user-service';
import Constants from '../../utils/constants';

const {
  IS_USER_AUTHENTICED,
  GET_USER_SIGN_UP
} = Constants.ACTIONS_NAME;

export default function* root() {
  yield all([
    fork(watchUserSignUp),
    fork(checkUserAuthentication)
  ]);
}

function* checkUserAuthentication() {
  const checkIsLogin = yield actionChannel(IS_USER_AUTHENTICED);

  while (true) {
    const req = yield take(checkIsLogin);
    const isUserAuthenticated = req.data;
    yield put(checkUserSignUpSuccess(isUserAuthenticated));
}

function* watchUserSignUp() {
  const userSignUpAction = yield actionChannel(GET_USER_SIGN_UP);

  while (true) {
    const req = yield take(userSignUpAction);

    try {
      const context = yield call(userSignUp, req.data);

      yield put(userSignUpSuccess(context));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
}