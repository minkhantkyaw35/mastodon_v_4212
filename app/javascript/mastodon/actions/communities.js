import api from '../api';

// import { showAlertForError } from './alerts';
// import { importFetchedAccounts } from './importer';

export const LISTS_FETCH_SUCCESS = 'LISTS_FETCH_SUCCESS';
export const LISTS_FETCH_REQUEST = 'LISTS_FETCH_REQUEST';
export const LISTS_FETCH_FAIL    = 'LISTS_FETCH_FAIL';


export const fetchCommunities = () => (dispatch) => {
  dispatch(fetchListsRequest());

  api().get('/api/v1/community/communities')
    .then(({ data }) => dispatch(fetchListsSuccess(data)))
    .catch(err => dispatch(fetchListsFail(err)));
};

export const fetchListsSuccess = lists => ({
  type: LISTS_FETCH_SUCCESS,
  lists,
});

export const fetchListsRequest = () => ({
  type: LISTS_FETCH_REQUEST,
});

export const fetchListsFail = error => ({
  type: LISTS_FETCH_FAIL,
  error,
});