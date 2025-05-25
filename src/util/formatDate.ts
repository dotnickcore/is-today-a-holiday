import dayjs from 'dayjs';

export const FormatDate = (date: string) => {
  return dayjs(date).format('DD/MM/YYYY');
};
