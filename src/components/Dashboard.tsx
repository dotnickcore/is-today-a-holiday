import { useForm, type SubmitHandler } from 'react-hook-form';
import { useEffect, useMemo } from 'react';
import { useHolidayContext } from '../hooks/useHolidayContext';
import { Form } from './ui/Form';
import Label from './ui/Label';
import Container from './ui/Container';
import { Select } from './ui/Select';
import Input from './ui/Input';
import type { IFormInput } from '../interfaces/IFormInput';

function Dashboard() {
  const formMethods = useForm<IFormInput>();
  const { watch } = formMethods;

  const { handleIsTodayAHoliday } = useHolidayContext();

  /* ---------- 1. watch just the individual fields ---------- */
  const [country, state, date] = watch(['country', 'state', 'date']);

  /* ---------- 2. do the lookup whenever the 3 fields are set ---------- */
  useEffect(() => {
    if (country && state && date) {
      handleIsTodayAHoliday({ country, state, date });
    }
  }, [country, state, date, handleIsTodayAHoliday]);

  /* ---------- 3. normal submit handler (optional) ---------- */
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    handleIsTodayAHoliday(data);
  };

  const countryOptions = useMemo(
    () => [{ value: 'AU', label: 'Australia' }],
    []
  );

  const stateOptions = useMemo(
    () => [
      { value: 'NSW', label: 'New South Wales' },
      { value: 'VIC', label: 'Victoria' },
      { value: 'QLD', label: 'Queensland' },
      { value: 'WA', label: 'Western Australia' },
      { value: 'SA', label: 'South Australia' },
      { value: 'TAS', label: 'Tasmania' },
      { value: 'ACT', label: 'Australian Capital Territory' },
      { value: 'NT', label: 'Northern Territory' },
    ],
    []
  );

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <Container>
        <Label htmlFor="country" labelClassName="block text-gray-700 mb-2">
          Select a country
        </Label>
        <Select
          name="country"
          register={formMethods.register}
          options={countryOptions}
          defaultValue={countryOptions[0].value}
          selectClassName="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </Container>

      <Container>
        <Label htmlFor="state" labelClassName="block text-gray-700 mb-2">
          Select a state
        </Label>
        <Select
          name="state"
          register={formMethods.register}
          options={stateOptions}
          defaultValue={stateOptions[0].value}
          selectClassName="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </Container>

      <Container>
        <Label htmlFor="date" labelClassName="block text-gray-700 mb-2">
          Select a date
        </Label>
        <Input
          name="date"
          type="date"
          register={formMethods.register}
          inputClassName="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </Container>
    </Form>
  );
}

export default Dashboard;