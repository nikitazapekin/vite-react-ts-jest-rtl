import { ChangeEvent } from 'react';
export interface HeaderProps {
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleClick: () => void;
}

//React.ChangeEvent<HTMLInputElement>
