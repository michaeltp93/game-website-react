import { GameListProps } from 'interfaces';
import React, { ReactElement } from 'react';
import GameCard from './GameCard';

const GameList = ({ err, games }: GameListProps): ReactElement => {
	if (err) return <p>Unable to fetch games</p>;
	if (!games?.length) return <p>No games avaliable</p>;

	return (
		<ul>
			{games.map(game => (
				<li key={game.id}>
					<GameCard content={game} />
				</li>
			))}
		</ul>
	);
};

export default GameList;
