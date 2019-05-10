import { all, takeLatest } from "redux-saga/effects";
import { MatchsTypes } from "../ducks/matchs";
import { load } from "./matchs";
export default function* rootSaga() {
  yield all([takeLatest(MatchsTypes.LOAD_REQUEST, load())]);
}
