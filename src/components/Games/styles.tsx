import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
	backgroundColor,
	primaryColor,
	primaryTextColor,
	secondaryColor,
	secondaryTextColor,
} from 'styles/theme';
import { breakpoints } from 'styles/breakpoints';

export const List = styled.ul`
	display: block;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	max-width: 542px;
	margin: 0 auto;
	padding: 0 16px;
	list-style-type: none;

	@media (min-width: ${breakpoints.tablet}) {
		max-width: ${breakpoints.tablet};
	}
	@media (min-width: ${breakpoints.desktop}) {
		max-width: ${breakpoints.desktop};
		padding: 0;
	}
`;

export const ListItem = styled.li`
	margin-bottom: 24px;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
	}
	@media (min-width: ${breakpoints.tablet}) {
		display: inline-block;
		max-width: 332px;
		margin-right: 24px;

		&:nth-of-type(even) {
			margin-right: 0;
		}
	}
	@media (min-width: ${breakpoints.desktop}) {
		max-width: 312px;

		&:nth-of-type(even) {
			margin-right: 24px;
		}
	}
`;

export const StyledLink = styled(Link)`
	width: 100%;
	display: inline-block;
	background-color: ${secondaryColor};
	border-radius: 4px;
	text-decoration: none;
`;

export const Img = styled.img`
	width: 100%;
`;

export const Title = styled.h2`
	margin: 0;
	font-size: 24px;
	font-weight: 500;
	color: ${primaryTextColor};

	@media (min-width: ${breakpoints.tablet}) {
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

export const Details = styled.div`
	padding: 20px;

	@media (min-width: ${breakpoints.tablet}) {
		white-space: nowrap;
	}
`;

export const Description = styled.p`
	font-size: 16px;
	color: ${secondaryTextColor};

	@media (min-width: ${breakpoints.tablet}) {
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

export const Icon = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 8px;
`;

export const Genre = styled.p`
	padding: 5px;
	margin: 0 8px 0 0;
	border-radius: 4px;
	font-size: 12px;
	font-weight: bold;
	color: ${primaryColor};
	background-color: ${backgroundColor};
	float: right;
`;

export const Form = styled.form`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: space-between;
	max-width: 524px;
	padding-left: 16px;
	margin: 25px auto;
	color: ${primaryColor};

	@media (min-width: ${breakpoints.tablet}) {
		max-width: ${breakpoints.tablet};
		flex-direction: row;
	}
	@media (min-width: ${breakpoints.desktop}) {
		max-width: 1400px;
		flex-direction: row;
		padding-left: 0;
	}
`;

export const Label = styled.label`
	margin-right: 16px;
	flex-basis: 25%;
	margin-top: 16px;
`;

export const Select = styled.select`
	width: 100%;
	margin-top: 5px;
	color: white;
	background-color: ${backgroundColor};
`;

export const LoadingContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 100px 50px 0 0;

	@media (min-width: ${breakpoints.tablet}) {
		max-width: ${breakpoints.tablet};
	}
	@media (min-width: ${breakpoints.desktop}) {
		max-width: ${breakpoints.desktop};
	}
`;
