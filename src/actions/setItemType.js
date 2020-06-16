import { SET_ITEM_TYPE_MOVIE, SET_ITEM_TYPE_TV, SET_ITEM_TYPE_PEOPLE } from './types';

const setItemTypeMovie = type => ({
  type: switchItemType(type)
});

const switchItemType = type => {
  switch(type) {
    case 'TV':
      return SET_ITEM_TYPE_TV
    case 'People':
      return SET_ITEM_TYPE_PEOPLE
    default:
      return SET_ITEM_TYPE_MOVIE
  }
}

export default setItemTypeMovie;
