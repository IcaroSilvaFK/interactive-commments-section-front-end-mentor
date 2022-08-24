import { SubmitHandler, useForm } from 'react-hook-form';
import { api } from '../../configs/global/api';
import { usePosts } from '../../store/posts';

import { useUser } from '../../store/users';

import { Container, Form, Column } from './styles';

interface IFormProps {
  comment: string;
}

export function CommentTextInput() {
  const { user } = useUser((state) => state);
  const { register, handleSubmit, reset, watch } = useForm<IFormProps>();
  const { getAllPosts } = usePosts((state) => state);

  const onSubmit: SubmitHandler<IFormProps> = async ({ comment }) => {
    try {
      await api.post('/posts', {
        userId: user?.id,
        content: comment,
      });
      getAllPosts();
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <Container>
      <img src={user?.avatar} alt={user?.username} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Column>
          <span>{watch('comment')?.length}/255</span>
          <textarea
            placeholder='Add a comment...'
            {...register('comment')}
            maxLength={255}
          />
        </Column>

        <button>Send</button>
      </Form>
    </Container>
  );
}
