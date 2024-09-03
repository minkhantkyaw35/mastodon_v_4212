// import PropTypes from 'prop-types';

// import {injectIntl } from 'react-intl';

// import { createSelector } from '@reduxjs/toolkit';
// import ImmutablePropTypes from 'react-immutable-proptypes';
// import ImmutablePureComponent from 'react-immutable-pure-component';
// import { connect } from 'react-redux';

// import { fetchCollections } from './actions/collections';

// const getOrderedLists = createSelector([state => state.get('lists')], lists => {
//   if (!lists) {
//     return lists;
//   }

//   return lists.toList().filter(item => !!item).sort((a, b) => a.get('title').localeCompare(b.get('title')));
// });

// const mapStateToProps = state => ({
//   lists: getOrderedLists(state),
// });

// class Collections extends ImmutablePureComponent {

//   static propTypes = {
//     params: PropTypes.object.isRequired,
//     dispatch: PropTypes.func.isRequired,
//     lists: ImmutablePropTypes.list,
//     intl: PropTypes.object.isRequired,
//     multiColumn: PropTypes.bool,
//   };

//   UNSAFE_componentWillMount () {
//     this.props.dispatch(fetchCollections());
//   }

// }

// export default connect(mapStateToProps)(injectIntl(Collections));

console.log('Hello, World!');
