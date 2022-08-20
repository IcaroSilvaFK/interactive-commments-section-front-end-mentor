import { MdReply, MdDelete, MdModeEdit } from 'react-icons/md';
import { FiPlus, FiMinus } from 'react-icons/fi';

import { useUser } from '../../store/users';

import {
  Container,
  Row,
  SectionLikeds,
  Tag,
  ContainerButtons,
  ContainerProfile,
  ContainerReply,
  ContainerContent,
} from './styles';

interface ICardProps {
  likeds: number;
  created: string;
  avatar_url: string;
  content: string;
  username: string;

  userId: string;
}

export function Card({
  avatar_url,
  content,
  created,
  likeds,
  username,
  userId,
}: ICardProps) {
  const { user } = useUser((state) => state);

  return (
    <Container>
      <SectionLikeds>
        <button>
          <FiPlus size={20} />
        </button>
        <b>{likeds}</b>
        <button>
          <FiMinus size={20} />
        </button>
      </SectionLikeds>
      <ContainerProfile>
        <img src={avatar_url} alt={username} />
        <b>{username}</b>
        {user?.id === userId && <Tag>you</Tag>}
        <span>{created}</span>
      </ContainerProfile>
      <ContainerReply>
        {user?.id === userId ? (
          <ContainerButtons>
            <button className='delete'>
              <MdDelete size={20} />
              Delete
            </button>
            <button>
              <MdModeEdit size={20} />
              Edit
            </button>
          </ContainerButtons>
        ) : (
          <button className='reply'>
            <MdReply size={20} />
            Reply
          </button>
        )}
      </ContainerReply>
      <ContainerContent>
        <p>{content}</p>
      </ContainerContent>
    </Container>
  );
}
/*

    <Row>
        <SectionLikeds>
          <button>
            <FiPlus size={20} />
          </button>
          <b>{likeds}</b>
          <button>
            <FiMinus size={20} />
          </button>
        </SectionLikeds>
        <SectionPost>
          <div className='row'>
            <div>
              <img src={avatar_url} alt={username} />
              <b>{username}</b>
              {user?.id === userId && <Tag>you</Tag>}
              <span>{created}</span>
            </div>
          </div>
          <p>{content}</p>
        </SectionPost>
        {user?.id === userId ? (
          <ContainerButtons>
            <button className='delete'>
              <MdDelete size={20} />
              Delete
            </button>
            <button>
              <MdModeEdit size={20} />
              Edit
            </button>
          </ContainerButtons>
        ) : (
          <button className='reply'>
            <MdReply size={20} />
            Reply
          </button>
        )}
      </Row>
*/
