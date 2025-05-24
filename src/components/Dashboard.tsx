import { useForm, type SubmitHandler } from 'react-hook-form';
import { Form } from './ui/Form';
import Label from './ui/Label';
import Container from './ui/Container';
import { Select } from './ui/Select';
import type { IFormInput } from '../interfaces/IFormInput';
import Input from './ui/Input';
import { useEffect } from 'react';

function Dashboard() {
  const formMethods = useForm<IFormInput>();
  const { watch, handleSubmit } = formMethods;

  const formValues = watch();
  
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    // Check if all required fields have values
    if (formValues.country && formValues.state && formValues.date) {
      handleSubmit(onSubmit)();
    }
  }, [formValues, handleSubmit]);

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
       <Container>
        <Label htmlFor="country" labelClassName="block text-gray-700 mb-2">Select a country</Label>
        <Select
              name="country"
              register={formMethods.register}
              options={[
                { value: 'AU', label: 'Australia ' },
              ]}
              selectClassName='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
       </Container>
       <Container>
        <Label htmlFor="state" labelClassName="block text-gray-700 mb-2">Select a State</Label>
         <Select
              name="state"
              register={formMethods.register}
              options={[
                { value: 'NSW', label: 'New South Wales' },
                { value: 'VIC', label: 'Victoria' },
                { value: 'QLD', label: 'Queensland' },
                { value: 'WA', label: 'Western Australia' },
                { value: 'SA', label: 'South Australia' },
                { value: 'TAS', label: 'Tasmania' },
                { value: 'ACT', label: 'Australian Capital Terrority' },
                { value: 'NT', label: 'Northern Terrority' },
              ]}
              selectClassName='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />     
       </Container>
      <Container>
        <Label htmlFor="date" labelClassName="block text-gray-700 mb-2">Select a Date</Label>
        <Input 
            name="date"
            register={formMethods.register}
            type="date"
            inputClassName='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </Container>
    </Form>
  );
}

export default Dashboard;
