import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ["data"],
  loadFailure: null
});

export const MatchsTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  data: [
    {
      id: 1,
      name: "Shae",
      lastMessage: "My Lion...",
      cover: "https://www.elhombre.com.br/wp-content/uploads/2013/06/Shae.jpg"
    },
    {
      id: 2,
      name: "Ygritte",
      lastMessage: "You know nothing, Isaac James",
      cover:
        "https://www.elhombre.com.br/wp-content/uploads/2013/06/Ygritte_Promotional.jpg"
    },
    {
      id: 3,
      name: "Ros",
      lastMessage: "Did yout like?",
      cover:
        "https://www.elhombre.com.br/wp-content/uploads/2013/06/ros-1024.jpg"
    }
  ]
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: (state, { data }) => state.merge(data)
});
