import { PropTypes, Container, Button, Label, Input } from 'common';
import { toast } from 'react-toastify';
import { ContactFormStyled } from './ContactForm.styled';

export const ContactForm = ({ isAdding, onSubmit }) => {
  const submitNewContact = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();

    if (!name || !phone) {
      return toast.error('Please fill name and phone');
    }

    onSubmit({ name, phone });
    form.reset();
  };

  return (
    <Container>
      <ContactFormStyled onSubmit={submitNewContact}>
        <Label label="Name">
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            isRequired
          />
        </Label>

        <Label label="Phone">
          <Input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            isRequired
          />
        </Label>

        <Button type="submit" disabled={isAdding}>
          Add contact
        </Button>
      </ContactFormStyled>
    </Container>
  );
};

ContactForm.propTypes = {
  isAdding: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
