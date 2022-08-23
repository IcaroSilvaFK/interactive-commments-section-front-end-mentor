import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { api } from '../../configs/global/api';
import { usePosts } from '../../store/posts';

import { Container } from './styles';

interface IEditTextFieldProps {
  value: string;
  comment_id?: string;
  post_id?: string;
  resetStatus: () => void;
}

interface IFormProps {
  content: string;
}

export function EditTextField({
  value,
  comment_id,
  post_id,
  resetStatus,
}: IEditTextFieldProps) {
  const { register, handleSubmit, reset } = useForm<IFormProps>();
  const { getAllPosts } = usePosts((state) => state);

  useEffect(() => {
    reset({
      content: value,
    });
  }, []);

  const onSubmit: SubmitHandler<IFormProps> = async ({ content }) => {
    try {
      await api.put(
        `/posts/${post_id ? `${post_id}` : `comments/${comment_id}`}`,
        {
          content,
        }
      );
      await getAllPosts();
      resetStatus();
    } catch (err) {}
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <textarea {...register('content')} />
      <button>Update</button>
    </Container>
  );
}
