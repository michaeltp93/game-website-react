import { GameListProps } from 'interfaces';
import React, { ReactElement } from 'react';
import GameCard from './GameCard';
import { List, ListItem } from './styles';

const GameList = ({ err, games }: GameListProps): ReactElement => {
	if (err) return <p>Unable to fetch games</p>;
	if (!games?.length) return <p>No games avaliable</p>;

	return (
		<List>
			{games.map(game => (
				<ListItem key={game.id}>
					<GameCard content={game} />
				</ListItem>
			))}
		</List>
	);
};

export default GameList;
