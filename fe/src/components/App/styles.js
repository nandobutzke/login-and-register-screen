import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 16px;
  margin: 0 auto;

  height: 100vh;

  width: 100%;
  max-width: 500px;

  footer {
    position: relative;
    top: 25%;

    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  
`;
