import { styled } from 'common';
import { ButtonStyled } from 'common/components/Button/Button.styled';
import { LabelStyled } from 'common/components/Label/Label.styled';

export const ContactItemStyled = styled.li`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};

  padding: ${({ theme }) => theme.spacing(2, 5, 2, 2)};

  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.spacing(1)};
  outline: 1px solid ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.transition('border-color, transform')}

  @media screen and (min-width: 768px) {
    /* width: calc(50% - 1 * ${({ theme }) => theme.spacing(3)}); */
    gap: ${({ theme }) => theme.spacing(3)};
  }

  @media screen and (min-width: 1200px) {
    /* width: calc(33% - 2 * ${({ theme }) => theme.spacing(3)}); */
    gap: ${({ theme }) => theme.spacing(4)};
  }

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

  span {
    text-decoration: ${({ completed }) => completed && '2px line-through'};
    word-break: break-word;
  }
`;

export const ContactLabel = styled(LabelStyled)`
  input[type='checkbox'] {
    width: clamp(24px, 2.1vw, 48px);
    height: clamp(24px, 2.1vw, 48px);
  }
`;

export const DeleteContactBtn = styled(ButtonStyled)`
  position: absolute;
  top: -${({ theme }) => theme.spacing(3)};
  right: -${({ theme }) => theme.spacing(2)};
  z-index: ${({ theme }) => theme.zIndex('DeleteContactBtn'.toLowerCase())};

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
