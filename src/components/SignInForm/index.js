import Button from '../Button';
import SignInWithGoogle from '../SignInWithGoogle';

import {
  ButtonContainer, Form, FormGroup, Input,
} from './styles';

export function SignInForm() {
  return (
    <Form>
      <FormGroup>
        <Input type="text" name="email" placeholder="E-mail" />
      </FormGroup>
      <FormGroup>
        <Input type="password" name="password" placeholder="Senha" />
      </FormGroup>
      <ButtonContainer>
        <Button type="submit">Entrar</Button>
        <SignInWithGoogle type="button" />
      </ButtonContainer>
    </Form>
  );
}
