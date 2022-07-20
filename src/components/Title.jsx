import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <h2>{ headline }</h2>
    );
  }
}

Planet.propTypes = {
  headline: Proptypes.string.isRequired,
};

export default Title;
