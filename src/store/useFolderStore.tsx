import { create } from 'zustand';
import { Folder } from '../types';

interface FolderStore{
  folders: Folder[];
  setFolders: (newFolders: Folder[]) => void;
}

const useFolderStore = create<FolderStore>((set) => ({
  folders: [],
  setFolders: (newFolders) => set({ folders: newFolders }),
}));

export default useFolderStore;