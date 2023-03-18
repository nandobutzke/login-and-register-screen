import styled from 'styled-components';

export const StyledLogoutButton = styled.button`
  background: ${({ theme }) => theme.colors.gray[100]};
  border: none;
  border-radius: 4px;
  padding: 16px 32px;
  font-size: 16px;

  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[150]};
  }

  &:active {
    background: ${({ theme }) => theme.colors.gray[200]};
  }
`;
