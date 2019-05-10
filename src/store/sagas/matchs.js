import { put } from "redux-saga";
import MacthsActions from "../ducks/matchs";
const data = [
  {
    id: 1,
    name: "Sansa Stark",
    cover:
      "https://nerdist.com/wp-content/uploads/2019/03/Sansa-Stark-1200x676.jpg"
  },
  {
    id: 2,
    name: "Ros",
    cover: "https://www.elhombre.com.br/wp-content/uploads/2013/06/ros-1024.jpg"
  },
  {
    id: 3,
    name: "Shae",
    cover: "https://www.elhombre.com.br/wp-content/uploads/2013/06/Shae.jpg"
  }
];

export function* load() {
  yield put(MacthsActions.loadSuccess(data));
}
