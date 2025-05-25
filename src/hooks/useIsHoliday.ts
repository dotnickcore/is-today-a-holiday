import { useEffect, useState } from 'react';
import type { IsHolidayInput } from '../types/input/IsHolidayInputProps';
import Holidays from 'date-holidays';
import type { Holiday } from '../types/output/HolidayProps';

function useIsHoliday({ countryCode, state, date }: IsHolidayInput) {
  const [result, setResult] = useState<Holiday | null>(null);

  useEffect(() => {
    const hdObject = new Holidays(countryCode, state);
    const holiday = hdObject.isHoliday(new Date(date));

    console.log(holiday);

    setResult(holiday ? holiday[0] : null);
  }, [countryCode, state, date]);

  return result;
}

export default useIsHoliday;
