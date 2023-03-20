import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
  // it('should render PostCard correctly', () => {
  //   const { debug } = render(<PostCard {...mock} />)

  //   debug();
  // });
  // The above is an example of debug using //

  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: /TITLE1/i })).toHaveAttribute('src', 'img/img.png');

    expect(screen.getByRole('heading', { name: /title1/i })).toBeInTheDocument();

    expect(screen.getByText('body1')).toBeInTheDocument();
  });
  it('should render PostCard correctly', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
