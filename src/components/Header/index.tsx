
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { HeaderProps } from './types';
const Header = ({ handleInputChange, handleClick }: HeaderProps) => {
	return (
		<header className="header">
			<div className="header__content">
				<nav className="header__search">
					<input type="text" className="search__bar" placeholder="Search..." onChange={handleInputChange} />
					<button className="search__btn" onClick={handleClick}>
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</nav>
			</div>
		</header>
	);
};

export default Header;

 