/// <reference types="vite/client" />

export type AllData = {
  people: TableEvent[];
};

export type TableEvent = {
  name: string;
  birth_date?: string;
  death_date?: string;
  birth_country?: string;
  title?: string;
  links?: Object[];
  works?: Object[];
  type: string;
};
