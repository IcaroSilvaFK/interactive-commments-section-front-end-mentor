import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Container, Column, Form, FieldSet, Between } from './styles';

interface IFormProps {
  username: string;
}

export function Login() {
  const { register, handleSubmit, reset } = useForm<IFormProps>();

  const onSubmit: SubmitHandler<IFormProps> = (data) => {
    console.log(data);

    reset();
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
