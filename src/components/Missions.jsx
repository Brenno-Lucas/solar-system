import React from 'react';
import Title from './Title';

class PlanetCard extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
      </div>
    );
  }
}

export default PlanetCard;
