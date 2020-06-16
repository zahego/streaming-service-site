import { SET_ITEM_TYPE_MOVIE, SET_ITEM_TYPE_TV, SET_ITEM_TYPE_PEOPLE } from '../actions/types';

const initialState = {
  itemType: 'Movie'
};

const setItemType = (state = initialState, action) => {
  switch(action.type) {
    case SET_ITEM_TYPE_MOVIE:
      return {
        itemType: 'Movie'
      }
    case SET_ITEM_TYPE_TV:
      return {
        itemType: 'TV'
      }
    case SET_ITEM_TYPE_PEOPLE:
      return {
        itemType: 'People'
      }
    default:
      return state;
  }
};

export default setItemType;
