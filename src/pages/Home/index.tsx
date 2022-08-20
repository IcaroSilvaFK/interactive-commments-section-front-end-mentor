import { useEffect, useState } from 'react';

import { Card } from '../../components/Card';
import { CommentTextInput } from '../../components/CommentTextInput';
import { api } from '../../configs/global/api';
import { useUser } from '../../store/users';

import { Container, SectionComments, SectionPosts } from './styles';

interface IUserProps {
  username: string;
  image: {
    webp: string;
  };
  id: string;
}
interface IPostsBase {
  content: string;
  createdAt: string;
  id: number;
  score: number;
  user: IUserProps;
}

interface IPostsProps extends IPostsBase {
  replies: IPostsBase[];
}

export function App() {
  const { setUser } = useUser((state) => state);
  const [posts, setPosts] = useState<IPostsProps[] | null>(null);

  useEffect(() => {
    window.addEventListener('scroll', smoothScroll);

    (async () => {
      try {
        const { data } = await api.get<IPostsProps[]>('comments');
        const { data: user } = await api.get<IUserProps>('currentUser');
        setPosts(data);
        setUser(user);
      } catch (err) {
        console.log(err);
      }
    })();

    return () => {
      window.removeEventListener('scroll', smoothScroll);
    };
  }, []);

  function smoothScroll() {
    window.scroll({
      behavior: 'smooth',
    });
  }

  return (
    <Container>
      {posts &&
        posts.map((post) => (
          <SectionPosts>
            <Card
              username={post.user.username}
              avatar_url={post.user.image.webp}
              content={post.content}
              created={post.createdAt}
              likeds={post.score}
              key={post.id}
              userId={post.user.id}
            />
            {post.replies.length > 0 && (
              <SectionComments key={post.content}>
                {post.replies.map((comment) => (
                  <Card
                    username={comment.user.username}
                    avatar_url={comment.user.image.webp}
                    content={comment.content}
                    created={comment.createdAt}
                    likeds={comment.score}
                    key={comment.id}
                    userId={comment.user.id}
                  />
                ))}
              </SectionComments>
            )}
          </SectionPosts>
        ))}
      <CommentTextInput />
    </Container>
  );
}
