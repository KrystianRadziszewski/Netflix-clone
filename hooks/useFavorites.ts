import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

const useFavorites = () => {
	const { data, error, isLoading, mutate } = useSWR('/api/favorites', fetcher, {
		ravalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	});

	return {
		data,
		error,
		isLoading,
		mutate,
	};
};

export default useFavorites;
