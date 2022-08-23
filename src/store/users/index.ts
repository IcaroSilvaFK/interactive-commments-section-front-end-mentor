import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface IUserProps {
  username: string;
  name: string;
  avatar: string;
  id: string;
}

interface IUseUserProps {
  user: IUserProps | null;
  setUser(user: IUserProps): void;
  removeUser(): void;
}

export const useUser = create<IUseUserProps>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        removeUser() {
          set((state) => ({ ...state, user: null }));
        },
        setUser(user) {
          set((state) => ({ ...state, user }));
        },
      }),
      { name: '@user:front-end-mentor' }
    )
  )
);
