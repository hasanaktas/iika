import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Divider, List, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.white,
    overflow: 'hidden',
  },
}));

const EmailList = props => {
  const { emails, onEmailOpen, onBack, className, ...rest } = props;

  const classes = useStyles();

  const [selectedEmails, setSelectedEmails] = useState([]);

  const handleSelectAll = () => {
    setSelectedEmails(emails.map(email => email.id));
  };

  const handleDeselectAll = () => {
    setSelectedEmails([]);
  };

  const handleToggleOne = id => {
    setSelectedEmails(selectedEmails => {
      let newSelectedEmails = [...selectedEmails];

      if (newSelectedEmails.includes(id)) {
        return newSelectedEmails.filter(email => email !== id);
      } else {
        newSelectedEmails.push(id);

        return newSelectedEmails;
      }
    });
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      Hasan
    </div>
  );
};

EmailList.propTypes = {
  className: PropTypes.string,
  emails: PropTypes.array.isRequired,
  onBack: PropTypes.func,
  onOpen: PropTypes.func,
};

export default EmailList;
