export interface Note {
  content: string;
  title: string;
  date: Date;
  user: {
    _id: string,
    email: string
  };
}
