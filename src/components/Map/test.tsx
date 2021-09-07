import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /openstreetmap/i
      })
    ).toBeInTheDocument()
    // screen.logTestingPlaygroundURL()
  })
  it('should render with the marker in correct place', () => {
    const placeOne = {
      id: '1',
      name: 'Petrópolis',
      slug: 'petropolis',
      location: {
        latitude: 129,
        longitude: -50
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Reykjavik',
      slug: 'reykjavik',
      location: {
        latitude: 129,
        longitude: -50
      }
    }

    render(<Map places={[placeOne, placeTwo]} />)

    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument()
  })
})
