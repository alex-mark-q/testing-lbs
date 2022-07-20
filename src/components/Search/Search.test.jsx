import { render, screen } from '@testing-library/react';
import Search from './Search';

const onChange = jest.fn();

describe('Search component', () => {
	it('render search component', () => {
		render (
			<Search value = "" onChange = {onChange}>
				Find
			</Search>
		)
		screen.debug(); // типа консольной команды
		expect(screen.getByText(/find/i)).toBeInTheDocument();
	});
});