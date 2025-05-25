import type { IFormInput } from '../interfaces/IFormInput';
import type { Holiday } from '../types/HolidayProps';

export interface IHolidayContextValue {
  isHoliday: Holiday | null;
  handleIsTodayAHoliday: (input: IFormInput) => void;
}
