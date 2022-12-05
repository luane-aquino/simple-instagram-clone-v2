import { render, screen } from '@testing-library/react';
import PictureCircle from './index';

describe('PictureCircle', () => {
  test('should render the component correctly', () => {
    const {asFragment} = render(<PictureCircle imageUrl='' name='nass' seen={false} />)
    expect(asFragment()).toMatchSnapshot()
    const button = screen.getByRole('button', {name: 'Story by nass, not seen'})
    expect(button).toBeVisible()
    const img = screen.getByRole('img', {name: 'user profile'})
    expect(img).toBeVisible()
    expect(img).toHaveAttribute('aria-disabled', 'true')
  })
})