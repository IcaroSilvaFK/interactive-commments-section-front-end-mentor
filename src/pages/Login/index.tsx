import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useUser } from '../../store/users';
import { Container, Column, Form, FieldSet, Between } from './styles';
import { api } from '../../configs/global/api';
import { useNavigate } from '../../hooks/useNavigate';

interface IUserProps {
  username: string;
  name: string;
  avatar: string;
  id: string;
}

interface IFormProps {
  username: string;
}

export function Login() {
  const { register, handleSubmit, reset } = useForm<IFormProps>();
  const { setUser } = useUser((state) => state);
  const { push } = useNavigate();

  const onSubmit: SubmitHandler<IFormProps> = async ({ username }) => {
    try {
      const { data } = await api.post<{ user: IUserProps }>('/users/login', {
        username,
      });
      setUser(data.user);
      reset();
      push('/home');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Column>
        <div className='column__logo'>
          <img
            src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600'
            alt='tailwindui'
          />
          <h1>Sign in to your account</h1>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FieldSet>
            <legend>username :</legend>
            <input type='text' {...register('username')} />
          </FieldSet>
          <Between>
            <Link to='/register'>Create account</Link>
            <button>Sign in</button>
          </Between>
        </Form>
      </Column>
    </Container>
  );
}
