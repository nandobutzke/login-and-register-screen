import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../assets/global';
import Routes from '../../Routes';
import { Container } from './styles';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Routes />
      </Container>
    </BrowserRouter>
  );
}
