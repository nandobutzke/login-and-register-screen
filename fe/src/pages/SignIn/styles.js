import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  height: 100vh;

  aside {
    flex: 7;
    
    display: flex;
    justify-content: center;

    background-color: #F7FAFC;

    img {
      width: 50%;
    }
  }

  main {
    flex: 8;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 16px;

    > * {
      width: 100%;
      max-width: 500px;
    }

    footer {
      position: relative;
      top: 25%;

      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
  }

  @media(max-width: 1000px) {
    aside {
      display: none;
    }
  }
`;
