import useSwr from 'swr'
import fetcher from '@/libs/fetcher';

const useMovies = () => {
  const { data, error, isLoading, mutate } = useSwr('/api/favorites', fetcher);
  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useMovies;