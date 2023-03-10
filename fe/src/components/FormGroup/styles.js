import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 16px;

  small {
    color: ${({ theme }) => theme.colors.danger.main};
  }
`;
