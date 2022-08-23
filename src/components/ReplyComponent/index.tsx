import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { api } from '../../configs/global/api';
import { usePosts } from '../../store/posts';

import { useUser } from '../../store/users';

import { Container, Form } from './styles';

interface IReplyComponentProps {
  post_id: string;
  username: string;
  onSucess: () => void;
}

interface IFormProps {
  comment: string;
}

export function ReplyComponent({
  post_id,
  username,
  onSucess,
}: IReplyComponentProps) {
  const { user } = useUser((state) => state);
  const { register, handleSubmit, reset } = useForm<IFormProps>();
  const { getAllPosts } = usePosts((state) => state);

  useEffect(() => {
    reset({
      comment: `@${username} `,
    });
  }, []);

  const onSubmit: SubmitHandler<IFormProps> = async ({ comment }) => {
    try {
      await api.post('/posts/comments', {
        user_id: user?.id,
        comment,
        post_id,
      });
      reset();
      onSucess();
      getAllPosts();
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
        <textarea placeholder='Add a comment...' {...register('comment')} />
        <button>Send</button>
      </Form>
    </Container>
  );
}
