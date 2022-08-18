import { Minus } from '../../icons/lib/Minus';
import { Plus } from '../../icons/lib/Plus';
import { Edit } from '../../icons/lib/Edit';
import { Reply } from '../../icons/lib/Reply';
import { Delete } from '../../icons/lib/Delete';

import { Container, Row, SectionLikeds, SectionPost } from './styles';

interface ICardProps {
  likeds: number;
  created: string;
  avatar_url: string;
  content: string;
  username: string;
}

export function Card({
  avatar_url,
  content,
  created,
  likeds,
  username,
}: ICardProps) {
  return (
    <Container>
      <Row>
        <SectionLikeds>
          <button>
            <Plus size={20} />
          </button>

          <b>{likeds}</b>
          <button>
            <Minus size={20} />
          </button>
        </SectionLikeds>
        <SectionPost>
          <div className='row'>
            <div>
              <img src={avatar_url} alt={username} />
              <b>{username}</b>
              <span>{created}</span>
            </div>
            <button>
              <Reply size={20} />
              Reply
            </button>
          </div>
          <p>{content}</p>
        </SectionPost>
      </Row>
    </Container>
  );
}
