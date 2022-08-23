import { useState, useCallback } from 'react';
import { MdReply, MdDelete, MdModeEdit } from 'react-icons/md';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { format } from 'date-fns';
import { AiOutlineClose } from 'react-icons/ai';

import { Modal } from '../Modal';
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
  comment_id: string;
}

export function CardComments({
  avatar_url,
  content,
  created,
  _countLikeds,
  username,
  userId,
  post_id,
  likeds,
  comment_id,
}: ICardProps) {
  const dateFormatter = format(new Date(created), 'h	  MMMM yyyy');
  const { user } = useUser((state) => state);
  const { getAllPosts } = usePosts((state) => state);
  const { handleOpen } = useModal((state) => state);

  const [isReply, setIsRepy] = useState(false);
  const [isEditComment, setIsEditComment] = useState(false);

  const userLabel = content.slice(content.indexOf('@'), content.indexOf(' '));
  const contentText = content.slice(content.indexOf(' ') + 1, content.length);

  async function handleLikePost(comment_id: string) {
    if (!user) return;

    try {
      await api.post('/post/comment/like', {
        user_id: user.id,
        comment_id,
      });
      await getAllPosts();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleRemoveLikeFromPost(like: LikedsProps[]) {
    const filteredLikeds = like.filter((like) => like.user_id === user?.id)[0];
    await api.delete(`/post/comment/like/${filteredLikeds.id}`);
    await getAllPosts();
  }

  return (
    <>
      <Container>
        <SectionLikeds>
          <button onClick={() => handleLikePost(comment_id)}>
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
                onClick={() => handleOpen(comment_id, 'comment')}
              >
                <MdDelete size={20} />
                Delete
              </button>
              <button onClick={() => setIsEditComment((prev) => !prev)}>
                {!isEditComment ? (
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
          {!isEditComment ? (
            <p>
              <span>{userLabel} </span>
              {contentText}
            </p>
          ) : (
            <EditTextField
              value={content}
              comment_id={comment_id}
              resetStatus={() => setIsEditComment(false)}
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
