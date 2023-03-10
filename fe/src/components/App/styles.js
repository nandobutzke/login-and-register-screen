import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 16px;
  height: 100vh;

  div, footer {
    width: 500px;
  }

  footer {
    position: relative;
    top: 25%;

    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  
`;
