import create from 'zustand';
import { api } from '../../configs/global/api';

interface IModalStoreProps {
  isOpen: boolean;
  id: string | null;
  typeModal: 'comment' | 'post' | null;
  handleOpen: (id: string, typeModal: 'comment' | 'post') => Promise<void>;
  handleClose: () => void;
}

export const useModal = create<IModalStoreProps>()((set) => ({
  id: null,
  isOpen: false,
  typeModal: null,
  handleClose() {
    set((state) => ({ ...state, commentId: null, isOpen: false }));
  },
  async handleOpen(id, typeModal) {
    set((state) => ({ ...state, isOpen: true, id, typeModal }));
  },
}));
