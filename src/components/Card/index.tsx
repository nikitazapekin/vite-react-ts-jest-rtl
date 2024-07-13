import { Component } from 'react';
import './index.scss';
import { CardProps } from './types.ts';
class Card extends Component<CardProps> {
	render() {
		const { html_url, avatar_url, login } = this.props;
		return (
			<a href={html_url} className="user__link">
				<p>Hello world</p>
				<div className="user">
					<img className="user__logo" src={avatar_url} alt="user" />
					{login}
				</div>
			</a>
		);
	}
}

export default Card;
