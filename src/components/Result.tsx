import { useHolidayContext } from '../hooks/useHolidayContext';
import { formatDate } from '../util/formatDate';
import Container from './ui/Container';

function Result() {
  const { isHoliday } = useHolidayContext();

  if (isHoliday === undefined) {
    return null;
  }

  return (
    <>
      {isHoliday === false ? (
        <Container containerClassName="mt-8 p-4 bg-orange-50 rounded-md border border-orange-200">
          <p className="text-orange-800 font-medium">
            There is no holiday, try another date!
          </p>
        </Container>
      ) : (
        <Container containerClassName="mt-8 p-4 bg-green-50 rounded-md border border-green-200">
          <p className="text-green-800 font-medium">Yes, there is a holiday!</p>
          <Container containerClassName="mt-2">
            <p className="text-green-800 font-medium">Name: {isHoliday.name}</p>
            <p className="text-green-800 font-medium">
              Date: {formatDate(isHoliday.date)}
            </p>
          </Container>
        </Container>
      )}
    </>
  );
}

export default Result;
