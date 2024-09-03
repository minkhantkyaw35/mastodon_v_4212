import api from '../../';

export const COLLECTIONS_FETCH_SUCCESS = 'COLLECTIONS_FETCH_SUCCESS';
export const COLLECTIONS_FETCH_REQUEST = 'COLLECTIONS_FETCH_REQUEST';
export const COLLECTIONS_FETCH_FAIL    = 'COLLECTIONS_FETCH_FAIL';


export const fetchCollections = () => (dispatch) => {
  dispatch(fetchCollectionsRequest());

  api().get('/api/v1/collections')
    .then(({ data }) => dispatch(fetchCollectionsSuccess(data)))
    .catch(err => dispatch(fetchCollectionsFail(err)));
};

export const fetchCollectionsSuccess = lists => ({
  type: COLLECTIONS_FETCH_SUCCESS,
  lists,
});

export const fetchCollectionsRequest = () => ({
  type: COLLECTIONS_FETCH_REQUEST,
});

export const fetchCollectionsFail = error => ({
  type: COLLECTIONS_FETCH_FAIL,
  error,
});