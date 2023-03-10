import { useContext } from 'react';
import { RegisterUserForm } from '../../components/RegisterUserForm';
import { AuthContext } from '../../contexts/AuthContext';

export default function Register() {
  const { handleRegisterUser } = useContext(AuthContext);

  async function handleSubmit(data) {
    await handleRegisterUser(data);
  }

  return (
    <>
      <div>
        <span>Ainda não possuí uma conta?</span>
        <h2>Cadastre-se gratuitamente!</h2>
      </div>

      <RegisterUserForm onSubmit={handleSubmit} />
    </>
  );
}
