import { useState } from 'react';
import { MdReply, MdDelete, MdModeEdit } from 'react-icons/md';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { format } from 'date-fns';
import { AiOutlineClose } from 'react-icons/ai';

import { useUser } from '../../store/users';
import { api } from '../../configs/global/api';
import { usePosts } from '../../store/posts';

import {
  Container,
  SectionLikeds,
  Tag,
  ContainerButtons,
  ContainerProfile,
  ContainerReply,
  ContainerContent,
} from './styles';
import { ReplyComponent } from '../ReplyComponent';
import { EditTextField } from '../EditTextField';
import { useModal } from '../../store/modal';

type LikedsProps = {
  id: string;
  liked: boolean;
  post_id: string;
  user_id: string;
};

interface ICardProps {
  _countLikeds: number;
  created: string;
  avatar_url: string;
  content: string;
  username: string;
  userId: string;
  post_id: string;
  likeds: LikedsProps[];
  test?: boolean;
}

export function Card({
  avatar_url,
  content,
  created,
  _countLikeds,
  username,
  userId,
  post_id,
  likeds,
  test,
}: ICardProps) {
  const dateFormatter = format(new Date(created), 'h	  MMMM yyyy');
  const { user } = useUser((state) => state);
  const { getAllPosts } = usePosts((state) => state);
  const { handleOpen } = useModal((state) => state);

  const [isReply, setIsRepy] = useState(false);
  const [isEditState, setIsEditState] = useState(false);

  async function handleLikePost(post_id: string) {
    if (!user) return;

    try {
      await api.post('/likeds', {
        user_id: user.id,
        post_id,
      });
      getAllPosts();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleRemoveLikeFromPost(like: LikedsProps[]) {
    const filteredLikeds = like.filter((like) => like.user_id === user?.id)[0];

    await api.delete(`likeds/${filteredLikeds.id}`);
    await getAllPosts();
  }

  async function handleDeletePost(postId: string) {
    try {
      await api.delete(`/posts/${postId}`);
      await getAllPosts();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Container>
        <SectionLikeds>
          <button onClick={() => handleLikePost(post_id)}>
            <FiPlus size={20} />
          </button>
          <b>{_countLikeds}</b>
          <button onClick={() => handleRemoveLikeFromPost(likeds)}>
            <FiMinus size={20} />
          </button>
        </SectionLikeds>
        <ContainerProfile>
          <img src={avatar_url} alt={username} />
          <b>{username.split(' ')[0]}</b>
          {user?.id === userId && <Tag>you</Tag>}
          <span>{dateFormatter}</span>
        </ContainerProfile>
        <ContainerReply>
          {user?.id === userId ? (
            <ContainerButtons>
              <button
                className='delete'
                onClick={() => handleOpen(post_id, 'post')}
              >
                <MdDelete size={20} />
                Delete
              </button>
              <button onClick={() => setIsEditState((prev) => !prev)}>
                {!isEditState ? (
                  <>
                    <MdModeEdit size={20} />
                    Edit
                  </>
                ) : (
                  <>
                    <AiOutlineClose size={20} />
                    Close
                  </>
                )}
              </button>
            </ContainerButtons>
          ) : (
            <button className='reply' onClick={() => setIsRepy(true)}>
              <MdReply size={20} />
              Reply
            </button>
          )}
        </ContainerReply>
        <ContainerContent>
          {!isEditState ? (
            <p>{content}</p>
          ) : (
            <EditTextField
              value={content}
              post_id={post_id}
              resetStatus={() => setIsEditState(false)}
            />
          )}
        </ContainerContent>
      </Container>
      {isReply && (
        <ReplyComponent
          post_id={post_id}
          username={username.split(' ')[0]}
          onSucess={() => setIsRepy(false)}
        />
      )}
    </>
  );
}
