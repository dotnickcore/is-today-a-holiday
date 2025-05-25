import type { HolidaysTypes } from 'date-holidays';
import type { IFormInput } from '../interfaces/IFormInput';

export interface IHolidayContextValue {
  isHoliday: undefined | false | HolidaysTypes.Holiday;
  handleIsTodayAHoliday: (input: IFormInput) => void;
}
