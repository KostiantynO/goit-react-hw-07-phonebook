import { styled } from 'common';

export const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  max-width: ${({ theme }) => theme.spacing(100)};
  padding: clamp(
    ${({ theme }) => theme.spacing(2)},
    5vw,
    ${({ theme }) => theme.spacing(6)}
  );
  margin: 0 auto;

  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.spacing(1)};
`;
