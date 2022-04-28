import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import {
  setFilter,
  useCreateContactMutation,
  useDeleteContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsApi';

import { getContactsFilter, getVisibleContacts } from 'redux/contactsSelectors';

import { Button, Section } from 'common';
import { ContactForm, ContactList, Filter } from 'components';

import 'react-toastify/dist/ReactToastify.css';
import { AppStyled } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);

  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [addContact, { isLoading: isAdding }] = useCreateContactMutation();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const visibleContacts = contacts && getVisibleContacts(contacts, filter);

  const onSubmitAddContact = ({ name, phone }) => {
    const normalizedNewName = name.toLowerCase();
    const savedContact = contacts.find(
      ({ name }) => name.toLowerCase() === normalizedNewName
    );

    if (savedContact) {
      return toast.error(`${savedContact.name} is already saved`);
    }

    addContact({ name, phone });
  };

  const onChangeFilter = e => dispatch(setFilter(e.target.value));
  const onClearFilter = () => dispatch(setFilter(''));

  const onDeleteContact = id => deleteContact(id);

  const batchDeleteContacts = () => {
    visibleContacts
      .filter(({ selected }) => selected)
      .forEach(({ id }) => deleteContact(id));
  };

  return (
    <AppStyled>
      <Section title="Phonebook" h="1">
        <ContactForm isAdding={isAdding} onSubmit={onSubmitAddContact} />
      </Section>

      <Section title="Contacts">
        <Filter
          value={filter}
          onChangeFilter={onChangeFilter}
          onClearFilter={onClearFilter}
          isFetching={isFetching}
        />

        <Button onClick={batchDeleteContacts} disabled={isDeleting}>
          Delete selected
        </Button>

        {visibleContacts && (
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={onDeleteContact}
          />
        )}
      </Section>

      <ToastContainer autoClose={1000} />
    </AppStyled>
  );
};
