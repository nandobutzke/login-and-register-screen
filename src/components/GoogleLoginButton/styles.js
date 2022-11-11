import styled from 'styled-components';

export const StyledButton = styled.button`
  margin-top: 16px;

  background-color: #1c2330;

  transition: background 0.2s;

  &:hover {
    background-color: #1f2736;
  }

  &:active {
    background-color: #1A202C;
  }

  img {
    margin-right: 8px;

    width: 24px;
  }
`;
