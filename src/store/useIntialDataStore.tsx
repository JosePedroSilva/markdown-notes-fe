import {create} from 'zustand';

interface Note{
  id: string;
  title: string;
  folder_id: string | null;
}

interface Folder{
  id: string;
  name: string;
  children: Folder[];
  notes: Note[];
}

interface IntialDataState{
  tree: Folder | null;
  setTree: (tree: Folder) => void;
}

const useIntialDataStore = create<IntialDataState>((set) => ({
  tree: null,
  setTree: (tree) => set({ tree }),
}));

export default useIntialDataStore;