import { render, screen } from '@testing-library/react';
import UserImage from './index';

describe('UserImage', () => {
  test('should render the component correctly', () => {
    const {asFragment} = render(<UserImage imageUrl='' name='nass' seen={false} />)
    expect(asFragment()).toMatchSnapshot()
    const button = screen.getByRole('button', {name: 'Story by nass, not seen'})
    expect(button).toBeVisible()
    const img = screen.getByRole('img', {name: 'user profile'})
    expect(img).toBeVisible()
    expect(img).toHaveAttribute('aria-disabled', 'true')
  })
})