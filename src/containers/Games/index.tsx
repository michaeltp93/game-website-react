import React, { ChangeEvent, ReactElement, useCallback, useState } from 'react';
import GameList from 'components/Games/GamesList';
import { Filter } from 'interfaces';
import useFetch from 'hooks/useFetch';

const GameListContainer = (): ReactElement => {
	const [filter, setFilter] = useState<Filter>({
		platform: 'browser',
		sortBy: 'relevance',
	});

	const { games, error, loading } = useFetch(filter);

	const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
		setFilter(current => ({
			...current,
			[e.target.name]: e.target.value,
		}));
	}, []);
	return (
		<GameList
			err={error}
			games={games}
			onFilterChange={onFilterChange}
			loading={loading}
		/>
	);
};
export default GameListContainer;
