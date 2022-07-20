import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('App component', () => {
	it('App render', () => {
		render(<App/>);
		expect(screen.getByRole('list')).toBeInTheDocument();
	});
});
