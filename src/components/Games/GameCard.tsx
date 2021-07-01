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
	const icons = platform.split(', ');

	const showIcons = () => {
		if (icons.length > 1) {
			return (
				<>
					<Icon src={browserIcon} alt="brower-icon" key={`${id}-browser`} />
					<Icon src={windowsIcon} alt="brower-icon" key={`${id}-windows`} />
				</>
			);
		} else if (icons[0] === BROWSER)
			return <Icon src={browserIcon} alt="brower-icon" key={`${id}-browser`} />;
		else if (icons[0] === WiNDOWs)
			<Icon src={windowsIcon} alt="brower-icon" key={`${id}-windows`} />;

		return null;
	};

	console.log(icons);

	const link = `/games/${id}`;
	return (
		<StyledLink to={link}>
			<Img alt={`${title} logo`} src={thumbnail} />
			<Details>
				<Title>{title}</Title>
				<Description>{short_description}</Description>
				<Genre>{genre}</Genre>
				{showIcons()}
			</Details>
		</StyledLink>
	);
};

export default GameCard;
