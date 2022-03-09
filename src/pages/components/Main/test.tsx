import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main></Main>)

    expect(
      screen.getByRole('heading', { name: /MathDias BoilerPlate/i })
    ).toBeInTheDocument()
  })
})
