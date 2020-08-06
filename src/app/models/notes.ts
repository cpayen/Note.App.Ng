export class NoteDir {
  path: string; 
  name: string; 
  ctime?: Date; 
  mtime?: Date; 
  children?: NoteDir[];
}