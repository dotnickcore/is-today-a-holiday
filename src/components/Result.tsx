import Container from './ui/Container';

function Result() {
  return (
    <>
      <Container containerClassName="mt-8 p-4 bg-green-50 rounded-md border border-green-200">
        <p className="text-green-800 font-medium">Yes, is a holiday in</p>
        <Container containerClassName="mt-2">
            <p className="text-green-800 font-medium">Name: Australia Day</p>
            <p className="text-green-800 font-medium">Date: January 26, 2025</p>
        </Container>
      </Container>

      <Container containerClassName="mt-8 p-4 bg-orange-50 rounded-md border border-orange-200">
        <p className="text-orange-800 font-medium">Yes, is a holiday in</p>
      </Container>
    </>
  );
}

export default Result;
