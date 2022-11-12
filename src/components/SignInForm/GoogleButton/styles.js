import styled from 'styled-components';

export const StyledGoogleButton = styled.button`
  margin-top: 16px;

  background-color: ${({ theme }) => theme.colors.darkBlue[800]};

  transition: background 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBlue[700]};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.darkBlue[900]};
  }

  img {
    margin-right: 8px;

    width: 24px;
  }
`;
