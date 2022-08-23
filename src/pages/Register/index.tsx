import { useId, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdImageSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { api } from '../../configs/global/api';
import { useConvertToBase64 } from '../../hooks/useConvertToBase64';
import { useNavigate } from '../../hooks/useNavigate';
import { useUser } from '../../store/users';

import {
  Container,
  SubContainer,
  Form,
  FieldSet,
  InputFileCover,
  Column,
} from './styles';

interface IUserProps {
  user: {
    username: string;
    name: string;
    avatar: string;
    id: string;
  };
}

interface IFormProps {
  name: string;
  username: string;
}

export function Register() {
  const fileInputId = useId();
  const nameInputId = useId();
  const usernameInputId = useId();
  const { converToBase64, imageBase64, inputRef } = useConvertToBase64();
  const { register, handleSubmit, watch, reset } = useForm<IFormProps>();
  const { push } = useNavigate();
  const { setUser } = useUser((state) => state);

  const onSubmit: SubmitHandler<IFormProps> = async ({ name, username }) => {
    if (!imageBase64) return;
    const response = await api.post('users', {
      name,
      username,
      avatar: imageBase64,
    });

    if (response.status === 201) {
      const { user }: IUserProps = response.data;

      setUser({
        avatar: user.avatar,
        id: user.id,
        name: user.name,
        username: user.username,
      });

      push('/home');
    }

    reset();
  };

  return (
    <Container>
      <SubContainer>
        <div className='column__logo'>
          <img
            src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600'
            alt='tailwindui'
          />
          <h1>Create your account</h1>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor={usernameInputId}>
            <FieldSet>
              <legend>username </legend>
              <input
                type='text'
                id={usernameInputId}
                {...register('username')}
              />
            </FieldSet>
          </label>
          <label htmlFor={nameInputId}>
            <FieldSet>
              <legend>name </legend>
              <input type='text' id={nameInputId} {...register('name')} />
            </FieldSet>
          </label>

          <InputFileCover htmlFor={fileInputId}>
            {imageBase64 ? (
              <img src={imageBase64} alt={watch('name')} />
            ) : (
              <MdImageSearch size={40} />
            )}
            <input
              type='file'
              id={fileInputId}
              ref={inputRef}
              onChange={converToBase64}
            />
          </InputFileCover>
          <Column>
            <button>Create</button>
            <Link to='/'>have account?</Link>
          </Column>
        </Form>
      </SubContainer>
    </Container>
  );
}
