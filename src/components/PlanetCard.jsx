import React from 'react';

class PlanetCard extends React.Component {
  render() {
    return (
      <div data-testid="planet-card">
        <span data-testid="planet-name">{ planetName }</span>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

Planet.propTypes = {
  planetImage: Proptypes.string.isRequired,
  planetName: Proptypes.string.isRequired,
};

export default PlanetCard;
