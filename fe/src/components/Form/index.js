import styled, { css } from 'styled-components';

export const Form = styled.form``;

export const Input = styled.input`
  width: 100%;

  border: 2px solid #E8E8E8;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  outline: none;
  padding: 0 16px;
  appearance: none;

  transition: all 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue.main};
  }

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
