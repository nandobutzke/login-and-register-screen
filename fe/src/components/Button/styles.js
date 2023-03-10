import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue.main};
  border: none;
  padding: 16px;


  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;

  transition: background 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue.dark};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.blue.light};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray[100]} !important;
    cursor: default !important;
  }
`;
