import React from 'react'
import './Pokemon.css'

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, name, type, image, weight, measure, link } = this.props;

    return (
      <div id={id} className='poke-card'>
        <div className='poke-info'>
          <div>{name}</div>
          <div>{type}</div>
          <div>Average weight: {weight}{measure}</div>
        </div>
        <img src={image} />
      </div>
    );
  }
}

export default Pokemon;
