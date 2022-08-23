import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { api } from '../../configs/global/api';

type UserProps = {
  avatar: string;
  id: string;
  name: string;
  username: string;
};

type LikedsProps = {
  id: string;
  liked: boolean;
  post_id: string;
  user_id: string;
};

type CommentsProps = {
  content: string;
  id: string;
  post_id: string;
  user_id: string;
  created_at: string;
  user: UserProps;
  likeds: LikedsProps[];
  _count: {
    likeds: number;
  };
};

type PostsProps = {
  id: string;
  content: string;
  created_at: string;
  likeds: LikedsProps[];
  comments: CommentsProps[];
  user_id: string;
  user: UserProps;
  _count: {
    likeds: number;
  };
};

interface IUsePostsProps {
  posts: PostsProps[];
  getAllPosts(): Promise<void>;
}

export const usePosts = create<IUsePostsProps>()(
  devtools(
    persist(
      (set) => ({
        posts: [],
        async getAllPosts() {
          try {
            const { data } = await api.get<{ posts: PostsProps[] }>('/posts');

            set((state) => ({ ...state, posts: data.posts }));
          } catch (err) {
            console.log(err);
          }
        },
      }),
      {
        name: '@posts:front-end-mentor',
      }
    )
  )
);
