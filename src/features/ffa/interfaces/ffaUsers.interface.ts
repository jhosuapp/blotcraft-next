export interface FfaUsersResponseInterface {
  data: FfaUsersItemInterface[],
  pagination: FfaUsersPaginationInterface
}

export interface FfaTopResponseInterface {
  kills: FfaUsersItemInterface[],
  deaths: FfaUsersItemInterface[],
  ks: FfaUsersItemInterface[],
}

export interface FfaUsersItemInterface {
  id:          number;
  uuid:        string;
  name:        string;
  dateCreated: string;
  last_online: string;
  kitData:     string;
  kills:       number;
  deaths:      number;
  killStreak:  number;
  bestStreak:  number;
  time:        string;
  weather:     boolean;
  killsVisibility: string;
  points: number;
  position: number;
}

interface FfaUsersPaginationInterface {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}