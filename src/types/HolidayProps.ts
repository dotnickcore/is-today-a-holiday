export type Holiday = {
  date: string;
  start: Date;
  end: Date;
  name: string;
  type: 'public' | 'bank' | 'optional' | 'school' | 'observance';
};
