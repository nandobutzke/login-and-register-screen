import { useContext, useEffect, useState } from 'react';
import useErrors from './useErrors';
import isEmailValid from '../utils/isValidEmail';
import { AuthContext } from '../contexts/AuthContext';

export default function useForm(onSubmit) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => () => {
    setName('');
    setEmail('');
    setPassword('');
  }, []);

  const {
    errors, setError, removeError, getMessageByFieldName,
  } = useErrors();

  const { handleGoogleLogin } = useContext(AuthContext);

  function handleNameChange(event) {
    setName(event.target.value);

    if (event.target.value) {
      removeError('name');
    }
  }

  function handleValidateName(event) {
    if (!event.target.value) {
      setError({ field: 'name', message: "O campo 'Nome' é obrigatório!" });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (isEmailValid(event.target.value)) {
      removeError('email');
    }
  }

  function handleValidateEmail(event) {
    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido!' });
    } else {
      removeError('email');
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);

    if (event.target.value) {
      removeError('password');
    }
  }

  function handleValidatePassword(event) {
    if (!event.target.value) {
      setError({ field: 'password', message: "O campo 'Senha' é obrigatório!" });
    } else {
      removeError('password');
    }
  }

  const isRegisterFormValid = (
    (name && email && password) && isEmailValid(email) && errors.length === 0
  );
  const isSignInFormValid = ((email && password) && isEmailValid(email) && errors.length === 0);

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
      email,
      password,
    });

    setIsSubmitting(false);
  }

  return {
    handleSubmit,
    getMessageByFieldName,
    handleNameChange,
    handleValidateName,
    handleEmailChange,
    handleValidateEmail,
    handlePasswordChange,
    handleValidatePassword,
    isSignInFormValid,
    isRegisterFormValid,
    isSubmitting,
    handleGoogleLogin,
  };
}
