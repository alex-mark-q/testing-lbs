import { render, screen } from '@testing-library/react';
import Search from './Search';
import userEvent from '@testing-library/user-event';

const onChange = jest.fn();

describe('Search component', () => {
	it('render search component', () => {
		render (
			<Search value = "" onChange = {onChange}>
				Find
			</Search>
		)
		// screen.debug(); // типа консольной команды
		expect(screen.getByText(/find/i)).toBeInTheDocument();
	});

	it('render without children', () => {
		render (
			<Search value = "" onChange = {onChange}/>
		)
	});

	it('render without placeholder', () => {
		render(
			<Search value = "" onChange = {onChange}/>
		)
		expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
		screen.debug();
	});
	it('onChange works', () => {
		render (
			<Search value = "" onChange = {onChange}>
				Find
			</Search>
		)
		userEvent.type(screen.getByRole('textbox'), 'React');
		expect(onChange).toHaveBeenCalledTimes(5);
		screen.debug();
	});
	it('dynamic styles works', () => {
		render (
			<Search value = "abc" onChange = {onChange}/>
		)
		expect(screen.getByRole('textbox')).toHaveClass('input');
		expect(screen.getByRole('textbox')).toHaveClass('filled');
		expect(screen.getByText('Search')).toHaveClass('label');
	})
});