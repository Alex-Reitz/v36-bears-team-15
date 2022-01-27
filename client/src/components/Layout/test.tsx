import { render, screen } from '../../lib/test-utils';

import Layout from '.';

describe('<Layout />', () => {
  it('should render the heading', () => {
    render(<Layout />);

    expect(
      screen.getByRole('heading', { name: /Layout/i }),
    ).toBeInTheDocument();
  });
});
