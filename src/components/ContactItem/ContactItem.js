import { PropTypes } from 'common';
import {
  ContactItemStyled,
  DeleteContactButton,
  ContactLabel,
  SelectContactCheckbox,
  ContactEditInput,
} from './ContactItem.styled';

import { AiOutlineClose } from 'react-icons/ai';

import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from 'redux/contactsApi';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const toastConfig = {
  autoClose: 2100,
};

export const ContactItem = ({ id, name, phone, selected }) => {
  const [updateContact, { isSuccess: isUpdated, isLoading: isUpdating }] =
    useUpdateContactMutation();
  const [deleteContact, { isSuccess: isDeleted, isLoading: isDeleting }] =
    useDeleteContactMutation();

  const [localName, setLocalName] = useState(() => name);
  const [localPhone, setLocalPhone] = useState(() => phone);

  useEffect(() => {
    if (isUpdated) {
      toast.success('Contact updated', toastConfig);
    }

    if (isDeleted) {
      toast.success('Contact deleted', toastConfig);
    }
  }, [isUpdated, isDeleted]);

  const submitNameUpdate = e => {
    updateContact({ id, name: e.target.value.trim() });
  };

  const submitPhoneUpdate = e => {
    updateContact({ id, phone: e.target.value.trim() });
  };

  const onToggleSelected = () => updateContact({ id, selected: !selected });

  const disabled = (isUpdating || isDeleting) ?? true;

  const onSetLocalName = e => setLocalName(e.target.value);
  const onSetLocalPhone = e => setLocalPhone(e.target.value);
  const onDeleteContact = () => deleteContact(id);

  return (
    <ContactItemStyled>
      <label>
        <SelectContactCheckbox
          checked={selected}
          title="Select contact"
          onChange={onToggleSelected}
          disabled={disabled}
        />
      </label>

      <ContactLabel>
        <ContactEditInput
          type="text"
          name="editName"
          value={localName}
          onChange={onSetLocalName}
          onBlur={submitNameUpdate}
          disabled={disabled}
        />
      </ContactLabel>

      <ContactLabel>
        <ContactEditInput
          type="tel"
          name="editPhone"
          value={localPhone}
          onChange={onSetLocalPhone}
          onBlur={submitPhoneUpdate}
          disabled={disabled}
        />
      </ContactLabel>

      {/* */}

      <DeleteContactButton
        onClick={onDeleteContact}
        disabled={disabled}
        display="if"
        round
      >
        <AiOutlineClose />
      </DeleteContactButton>
    </ContactItemStyled>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};
