import { useCallback, useMemo, useState } from 'react';
import type { Holiday } from '../types/HolidayProps';
import type { IFormInput } from '../interfaces/IFormInput';
import Holidays from 'date-holidays';
import type { IHolidayContextValue } from './HolidayContextValue';
import { HolidayContext } from './HolidayContextInstance';

export default function HolidayProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHoliday, setIsHoliday] = useState<Holiday | null>(null);

  // useCallback: Memoizes the function itself to prevent recreation on every render.
  // - Only recreates if dependencies change (empty array [] = never recreates)
  // - Prevents unnecessary re-renders of components that receive this function
  const handleIsTodayAHoliday = useCallback((input: IFormInput) => {
    try {
      if (!input.country || !input.state || !input.date) {
        console.warn('Missing required holiday check parameters');
        setIsHoliday(null);
        return;
      }

      // initialize Holidays (memoized per country/state)
      const hdObject = new Holidays(input.country, input.state);

      // check holiday - properly typed now
      const result = hdObject.isHoliday(input.date);

      // handle both array and false cases
      if (Array.isArray(result) && result.length > 0) {
        console.log(result);
        setIsHoliday(result[0]);
      } else {
        setIsHoliday(null); // No holiday found
      }

      // console.log(hdObject.isHoliday('2025-04-18 08:30:00'));
    } catch (error) {
      console.error('Holiday check failed:', error);
      setIsHoliday(null);
    }
  }, []);

  // useMemo: Memoizes the computed context value object
  // - Only recalculates when isHoliday or handleIsTodayAHoliday changes
  // - Prevents unnecessary context updates and consumer re-renders
  const value: IHolidayContextValue = useMemo(
    () => ({
      isHoliday,
      handleIsTodayAHoliday,
    }),
    [isHoliday, handleIsTodayAHoliday]
  );

  return (
    <HolidayContext.Provider value={value}>{children}</HolidayContext.Provider>
  );
}
