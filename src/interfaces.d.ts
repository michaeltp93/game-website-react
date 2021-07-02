import { ChangeEvent } from 'react';

export type Game = {
	id: number;
	title: string;
	thumbnail: string;
	short_description: string;
	game_url: string;
	genre: string;
	platform: string;
	publisher: string;
	developer: string;
	release_date: string;
	freetogame_profile_url: string;
};

export interface GameListProps {
	err?: string;
	games: Game[];
	loading: boolean;
	onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

export interface GameCardProps {
	content: Game;
}

export interface GameFilterProps {
	onChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

export type Filter = {
	platform: string;
	genre?: string;
	tag?: string;
	sortBy?: string;
};

export type Response = {
	games: Game[];
	error?: string;
	loading: boolean;
};
