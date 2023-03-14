import Dexie, { Table } from 'dexie';
export interface User {
  first_name:          string;
  last_name:           string;
  email:               string;
  password:            string;
  avatar:              null;
  location:            null;
  title:               string;
  description:         null;
  tags:                null;
  language:            null;
  theme:               string;
  tfa_secret:          null;
  email_notifications: boolean;
  status:              string;
  role:                string;
  token:               string;
  id:                  string;
  last_page:           string;
  last_access:         Date;
  provider:            string;
  external_identifier: null;
  auth_data:           null;
}

export class UserDb extends Dexie {
  users!: Table<User>;

  constructor() {
    super('UserStore');
    this.version(1).stores({
      users: 'id, first_name, last_name, email, password, avatar, location, title, description, tags, language, theme, tfa_secret, email_notifications, status, ' +
        'role, token, last_page, last_access, provider, external_identifier, auth_data'
    })
  }
}

export const UserStore = new UserDb();