export interface Post {
  id:           string;
  status:       string;
  sort:         null;
  user_created: string;
  date_created: Date;
  user_updated: string;
  date_updated: Date;
  header:       string;
  miniature:    string;
  descriptor:   string;
  textblock:    Array<{ item: { text: string }}>;
}

export interface Textblock {
  id: number;
  user_created: string;
  date_created: Date;
  user_updated: string;
  date_updated: Date;
  text: string;
}