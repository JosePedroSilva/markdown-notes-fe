export interface NoteMeta {
  id: string;
  title: string;
}

export interface Folder {
  id: string;
  name: string;
  children?: Folder[];
  notes?: NoteMeta[];
}