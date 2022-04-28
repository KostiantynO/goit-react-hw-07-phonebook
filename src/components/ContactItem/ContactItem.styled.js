import { styled } from 'common';
import { ButtonStyled } from 'common/components/Button/Button.styled';

export const ContactItemStyled = styled.li`
  position: relative;

  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;

  padding: ${({ theme }) => theme.spacing(2, 5, 2, 2)};

  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.spacing(1)};
  outline: 1px solid ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.transition('border-color, transform')};

  :hover,
  :focus-within {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.01);
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${({ theme }) =>
      theme.zIndex('ContactItemStyled::after'.toLowerCase())};
    display: block;

    width: 100%;
    height: 5px;

    background-color: ${({ theme }) => theme.colors.darkGreen};

    ${({ theme }) => theme.transition('transform')};
    border-radius: ${({ theme }) => theme.spacing(5)};

    transform: ${({ completed }) => `scale(${completed ? 1 : 0})`};
  }
`;

export const ContactEditWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ContactLabelName = styled.label`
  width: 60%;
`;

export const ContactLabelPhone = styled.label`
  width: 40%;
  > input {
    text-align: end;
  }
`;

export const SelectContactCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: clamp(20px, 3vw, 28px);
  height: clamp(20px, 3vw, 28px);
`;

export const ContactEditInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(1, 2)};
  font-size: clamp(0.8rem, 3vw, 1rem);
  color: inherit;
  word-break: break-word;
  background-color: ${({ disabled }) => !disabled && 'transparent'};
  border: none;
`;

export const DeleteContactButton = styled(ButtonStyled)`
  position: absolute;
  top: -${({ theme }) => theme.spacing(3)};
  right: -${({ theme }) => theme.spacing(2)};
  z-index: ${({ theme }) => theme.zIndex('DeleteContactButton'.toLowerCase())};

  padding: clamp(2px, 2.1vw, 4px);

  svg {
    width: clamp(16px, 3vw, 21px);
    height: clamp(16px, 3vw, 21px);
    color: #fff;
    opacity: 0.8;

    ${({ theme }) => theme.transition('opacity')}
  }

  &:focus svg,
  &:hover svg {
    opacity: 1;
  }
`;

export const EditContactButton = styled(DeleteContactButton)`
  right: ${({ theme }) => theme.spacing(12)};
  z-index: ${({ theme }) => theme.zIndex('EditContactButton'.toLowerCase())};
`;
