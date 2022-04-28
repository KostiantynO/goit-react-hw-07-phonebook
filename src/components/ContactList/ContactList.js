import { PropTypes, Container } from 'common';
import { ContactItem } from 'components/ContactItem';
import { ContactListStyled } from './ContactList.styled';

export const ContactList = ({ contacts }) =>
  console.log('List re-render') || (
    <Container>
      <ContactListStyled>
        {contacts.map(contact => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </ContactListStyled>
    </Container>
  );

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
