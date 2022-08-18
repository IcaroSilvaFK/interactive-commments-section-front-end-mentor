import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import { api } from './configs/global/api';
import { Container, SectionComments, SectionPosts } from './styles/home.styles';

interface IPostsBase {
  content: string;
  createdAt: string;
  id: number;
  score: number;
  user: {
    username: string;
    image: {
      webp: string;
    };
  };
}

interface IPostsProps extends IPostsBase {
  replies: IPostsBase[];
}

export function App() {
  const [posts, setPosts] = useState<IPostsProps[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get<IPostsProps[]>('comments');
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

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
            />
            {post.replies.length > 0 && (
              <SectionComments>
                {post.replies.map((comment) => (
                  <Card
                    username={comment.user.username}
                    avatar_url={comment.user.image.webp}
                    content={comment.content}
                    created={comment.createdAt}
                    likeds={comment.score}
                    key={comment.id}
                  />
                ))}
              </SectionComments>
            )}
          </SectionPosts>
        ))}
    </Container>
  );
}
