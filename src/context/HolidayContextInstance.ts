import { createContext } from 'react';
import type { IHolidayContextValue } from './HolidayContextValue';

export const HolidayContext = createContext<IHolidayContextValue | undefined>(
  undefined
);
