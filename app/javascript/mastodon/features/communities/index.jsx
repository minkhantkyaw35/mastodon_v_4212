import PropTypes from 'prop-types';

import {injectIntl } from 'react-intl';

// import { Helmet } from 'react-helmet';

import { createSelector } from '@reduxjs/toolkit';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { connect } from 'react-redux';

//import ListAltIcon from '@/material-icons/400-24px/list_alt.svg?react';
import { fetchCommunities } from 'mastodon/actions/communities';
// import Column from 'mastodon/components/column';
// import ColumnHeader from 'mastodon/components/column_header';
// import { LoadingIndicator } from 'mastodon/components/loading_indicator';
// import ScrollableList from 'mastodon/components/scrollable_list';
// import ColumnLink from 'mastodon/features/ui/components/column_link';
// import ColumnSubheading from 'mastodon/features/ui/components/column_subheading';



// const messages = defineMessages({
//   heading: { id: 'column.lists', defaultMessage: 'Lists' },
//   subheading: { id: 'lists.subheading', defaultMessage: 'Your lists' },
// });

const getOrderedLists = createSelector([state => state.get('lists')], lists => {
  if (!lists) {
    return lists;
  }

  return lists.toList().filter(item => !!item).sort((a, b) => a.get('title').localeCompare(b.get('title')));
});

const mapStateToProps = state => ({
  lists: getOrderedLists(state),
});

class Communities extends ImmutablePureComponent {

  static propTypes = {
    params: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    lists: ImmutablePropTypes.list,
    intl: PropTypes.object.isRequired,
    multiColumn: PropTypes.bool,
  };

  UNSAFE_componentWillMount () {
    this.props.dispatch(fetchCommunities());
  }

}

export default connect(mapStateToProps)(injectIntl(Communities));
