import styled from 'styled-components';

export const StyledGoogleButton = styled.button`
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.gray[900]} !important;
  background-color: ${({ theme }) => theme.colors.gray[50]};

  transition: background 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[150]};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }

  img {
    margin-right: 8px;

    width: 24px;
  }
`;
