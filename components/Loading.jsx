import Loader from '../components/Loader';
import Skeleton from '../components/Skeleton';

const ExamplePage = () => {
  const isLoading = true; // Set this based on your loading state

  return (
    <div>
      {isLoading ? <Loader /> : <YourContentComponent />}
      <Skeleton /> {/* Display Skeleton while loading data */}
    </div>
  );
};

export default ExamplePage;