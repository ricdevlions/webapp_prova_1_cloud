import { Loader } from 'lucide-react';

const LoaderPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen animate-spin'>
      <Loader />
    </div>
  );
};

export default LoaderPage;