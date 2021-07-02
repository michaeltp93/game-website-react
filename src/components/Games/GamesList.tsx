import { GameListProps } from 'interfaces';
import React, { ReactElement } from 'react';
import GameFilter from './GamesFilter';
import GameCard from './GameCard';
import { List, ListItem, LoadingContainer } from './styles';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { primaryColor } from 'styles/theme';

const GameList = ({
	err,
	games,
	loading,
	onFilterChange,
}: GameListProps): ReactElement => {
	if (err) return <p>Unable to fetch games</p>;
	// if (!games?.length) return <p>No games avaliable</p>;

	return (
		<>
			<GameFilter onChange={onFilterChange} />
			{loading && !games?.length && (
				<LoadingContainer>
					<PacmanLoader loading color={primaryColor} />
				</LoadingContainer>
			)}
			{games.length >= 1 && !loading && (
				<List>
					{games.map(game => (
						<ListItem key={game.id}>
							<GameCard content={game} />
						</ListItem>
					))}
				</List>
			)}
		</>
	);
};

export default GameList;
