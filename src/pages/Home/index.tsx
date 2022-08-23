import { useEffect, useCallback } from 'react';

import { Card } from '../../components/Card';
import { SectionLikeds } from '../../components/Card/styles';
import { CardComments } from '../../components/CardComments';
import { CommentTextInput } from '../../components/CommentTextInput';
import { api } from '../../configs/global/api';
import { usePosts } from '../../store/posts';
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

export function Home() {
  const { getAllPosts, posts } = usePosts((state) => state);
  const { user } = useUser((state) => state);

  useEffect(() => {
    (async () => {
      try {
        await getAllPosts();
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Container>
      {posts &&
        posts.map((post) => (
          <SectionPosts key={post.id}>
            <Card
              username={post.user.name}
              avatar_url={post.user.avatar}
              content={post.content}
              created={post.created_at}
              _countLikeds={post._count.likeds}
              key={post.id}
              userId={post.user.id}
              post_id={post.id}
              likeds={post.likeds}
              test={post.likeds.map((liked) => liked.user_id === user?.id)[0]}
            />
            {post.comments.length > 0 && (
              <SectionComments key={post.content}>
                {post.comments.map((comment) => (
                  <CardComments
                    username={comment.user.name}
                    avatar_url={comment.user.avatar}
                    content={comment.content}
                    created={comment.created_at}
                    likeds={comment.likeds}
                    key={comment.id}
                    userId={comment.user.id}
                    _countLikeds={comment._count.likeds}
                    post_id={post.id}
                    comment_id={comment.id}
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
