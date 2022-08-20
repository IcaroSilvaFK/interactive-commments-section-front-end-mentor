import { SubmitHandler, useForm } from 'react-hook-form';

import { useUser } from '../../store/users';

import { Container, Form } from './styles';

interface IFormProps {
  comment: string;
}

export function CommentTextInput() {
  const { user } = useUser((state) => state);
  const { register, handleSubmit, reset } = useForm<IFormProps>();

  const onSubmit: SubmitHandler<IFormProps> = (data) => {
    console.log(data);

    reset();
  };

  return (
    <Container>
      <img src={user?.image.webp} alt={user?.username} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <textarea placeholder='Add a comment...' {...register('comment')} />
        <button>Send</button>
      </Form>
    </Container>
  );
}
