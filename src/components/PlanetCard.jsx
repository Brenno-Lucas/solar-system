import React from 'react';
import propTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetImage, planetName } = this.props;
    return (
      <div data-testid="planet-card">
        <span data-testid="planet-name">{ planetName }</span>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: propTypes.string.isRequired,
  planetName: propTypes.string.isRequired,
};

export default PlanetCard;
