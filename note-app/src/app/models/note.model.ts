export interface Note {
  content: string;
  title: string;
  date: Date;
  _id: string;
  user: {
    _id: string,
    email: string
  };
}
