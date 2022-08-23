import { useEffect } from 'react';

import { api } from '../../configs/global/api';
import { useModal } from '../../store/modal';
import { usePosts } from '../../store/posts';
import { useUser } from '../../store/users';

import {
  Container,
  Heading,
  Row,
  Modal as ModalContainer,
  Content,
} from './styles';

export function Modal() {
  const { user } = useUser((state) => state);
  const { id, handleClose, isOpen, typeModal } = useModal((state) => state);
  const { getAllPosts } = usePosts((state) => state);

  useEffect(() => {
    window.addEventListener('keyup', keyPressEvent);

    return () => {
      window.removeEventListener('keydown', keyPressEvent);
    };
  }, []);

  async function handleRemoveComment() {
    if (!id) return;

    if (typeModal === 'comment') {
      await api.delete(`/posts/comments/${id}`);
    }

    if (typeModal === 'post') {
      await api.delete(`/posts/${id}`);
    }
    await getAllPosts();
    handleClose();
  }

  function keyPressEvent(e: KeyboardEvent) {
    if (e.key === 'Escape') handleClose();
  }

  if (!isOpen) {
    return null;
  }

  return (
    <Container onClick={handleClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Heading>
          <b>Delete {typeModal}</b>
        </Heading>
        <Content>
          <p>
            <span>{user?.name} </span>
            you want to delete this comment? This will remove the comment and
            can´t be undeone.
          </p>
        </Content>
        <Row>
          <button onClick={handleClose} className='row__cancel'>
            No, Cancel
          </button>
          <button onClick={handleRemoveComment} className='row__delete'>
            yes, delete
          </button>
        </Row>
      </ModalContainer>
    </Container>
  );
}
