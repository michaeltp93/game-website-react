import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_HOST, API_KEY } from 'constants-globals';
import type { Filter, Game, Response } from 'interfaces';

const useFetch = (params: Filter): Response => {
	const [games, setGames] = useState<Game[]>([]);
	const [err, setErr] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const { platform, genre, tag, sortBy } = params;

	useEffect(() => {
		setLoading(true);
		axios
			.get('/games?platform=browser', {
				baseURL: `https://${API_HOST}/api`,
				headers: {
					'x-rapidapi-key': API_KEY,
					'x-rapidapi-host': API_HOST,
				},
				params: {
					platform,
					category: genre,
					tag,
					'sort-by': sortBy,
				},
			})
			.then(res => {
				setGames(res.data);
				setLoading(false);
			})
			.catch(e => setErr(e.message));
	}, [platform, genre, tag, sortBy]);

	return {
		games,
		error: err,
		loading,
	};
};

export default useFetch;
