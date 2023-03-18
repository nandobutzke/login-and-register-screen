import styled, { css } from 'styled-components';

export const Form = styled.form`
  
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px;

  border: 1px solid #E8E8E8;
  border-radius: 4px;

  ${({ theme, error }) => error && css`
    border-color: ${theme.colors.danger.main};
    color: ${theme.colors.danger.main};
  `}
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;

  .already-registered {
    font-size: 14px;
  }

  button {
    margin-top: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #FFF;

    padding: 16px;

    border: none;
    border-radius: 4px;

    font-size: 16px;
    font-weight: bold;

    width: 100%;
  }
`;
