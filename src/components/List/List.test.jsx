import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from './List';

const data = ['html', 'css', 'js'];

describe('List component', () => {
	
	it('List renders', () => {
		render(<List items = {data}/>);
		expect(screen.getByRole('list')).toBeInTheDocument(); // проверяет есть ли список
		expect(screen.getByText(/html/i)).toBeInTheDocument(); // проверяет есть ли такой текст
	});
	it('List renders without data', () => {
		render(<List />);
		expect(screen.queryByRole('list')).toBeNull();
	});
	it('List snapshot', () => {
		const list = render(<List items = {data}/>);
		expect(list).toMatchSnapshot();
	});
	it('List empty snapshot', () => {
		const list = render(<List />);
		expect(list).toMatchSnapshot();
	});
	
});