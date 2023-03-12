import React from 'react';

import PropTypes from 'prop-types';

import styles from './contact-list-el.module.scss';

const ContactListEl = ({ id, name, phone, removeContact }) => {
  return (
    <ul>
      <li className={styles.listItem} key={id}>
        {name}: {phone}
        <button className={styles.button} onClick={removeContact} type="button">
          Delete
        </button>
      </li>
    </ul>
  );
};

export default ContactListEl;

ContactListEl.propTypes = {
  removeContact: PropTypes.func.isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
