import Dexie, { Table } from 'dexie';

export interface IPost {
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
  blocklist:    number[];
}

export class PostCollection extends Dexie {
  posts!: Table<IPost>

  constructor() {
    super('PostCollection');
    this.version(1).stores({
      posts: 'id, status, sort, user_created, date_created, user_updated, date_updated, name, miniature,desc, blocklist'
    })
  }
}

export const IndexDBPostCollection = new PostCollection();