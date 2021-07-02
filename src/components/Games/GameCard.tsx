import { GameCardProps } from 'interfaces';
import windowsIcon from 'assets/icons/windows.svg';
import browserIcon from 'assets/icons/browser.svg';
import React, { ReactElement } from 'react';
import {
	StyledLink,
	Img,
	Title,
	Details,
	Description,
	Genre,
	Icon,
} from './styles';
import { WiNDOWs, BROWSER } from './constants';

const GameCard = ({ content }: GameCardProps): ReactElement => {
	const { id, title, thumbnail, short_description, genre, platform } = content;
	const icons = platform.split(',').map(p => {
		let icon = null;
		switch (p.trim()) {
			case BROWSER:
				icon = (
					<Icon key={`${id}-browser`} alt="browser icon" src={browserIcon} />
				);
				break;
			case WiNDOWs:
				icon = (
					<Icon key={`${id}-windows`} alt="windows icon" src={windowsIcon} />
				);
				break;
			default:
				break;
		}
		return icon;
	});

	console.log(icons);

	const link = `/games/${id}`;
	return (
		<StyledLink to={link}>
			<Img alt={`${title} logo`} src={thumbnail} />
			<Details>
				<Title>{title}</Title>
				<Description>{short_description}</Description>
				<Genre>{genre}</Genre>
				{icons}
			</Details>
		</StyledLink>
	);
};

export default GameCard;
