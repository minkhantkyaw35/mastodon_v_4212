import React from 'react';
import ColumnLink from 'mastodon/components/column_link';
import AlternateEmailIcon from '@/material-icons/400-24px/alternate_email.svg?react';
import { injectIntl } from 'react-intl';

const NavigationPanel = ({ intl }) => (
  <ColumnLink transparent to='/conversations' icon='at' iconComponent={AlternateEmailIcon} text={intl.formatMessage(messages.direct)} />
);

export default injectIntl(NavigationPanel);
