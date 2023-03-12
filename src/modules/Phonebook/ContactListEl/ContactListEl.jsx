import React from 'react';

import PropTypes from 'prop-types';

const ContactListEl = ({ id, name, phone, removeContact }) => {
  return (
    <ul>
      <li key={id}>
        {name}: {phone}
        <button onClick={removeContact} type="button">
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
