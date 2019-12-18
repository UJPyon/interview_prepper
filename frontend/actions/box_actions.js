import {
  getAllBoxes,
  findBox,
  createBox,
  updateBox,
  destroyBox
} from "../util/box_api_util";

export const FETCH_BOX = "FETCH_BOX";
export const FETCH_ALL_BOXES = "FETCH_ALL_BOXES";
export const CREATE_BOX = "CREATE_BOX";
export const UPDATE_BOX = "UPDATE_BOX";
export const DELETE_BOX = "DELETE_BOX";

export const fetchBox = box => {
  return {
    type: FETCH_BOX,
    box
  };
};
export const fetchAllBoxes = boxes => {
  return {
    type: FETCH_ALL_BOXES,
    boxes
  };
};

export const newBox = box => {
  return {
    type: CREATE_BOX,
    box
  };
};

export const editBox = box => {
  return {
    type: UPDATE_BOX,
    box
  };
};

export const removeBox = id => {
  return {
    type: DELETE_BOX,
    id
  };
};

export const receiveBox = id => dispatch => {
  return findBox(id).then(box => dispatch(fetchBox(box)));
};

export const receiveAllBoxes = () => dispatch => {
  return getAllBoxes().then(boxes => dispatch(fetchAllBoxes(boxes)));
};

export const createNewBox = box => dispatch => {
  return createBox(box).then(box => dispatch(newBox(box)));
};

export const updateExistingBox = box => dispatch => {
  return updateBox(box).then(box => dispatch(editBox(box)));
};

export const deleteBox = id => dispatch => {
  return destroyBox(id).then(() => dispatch(removeBox(id)));
};
