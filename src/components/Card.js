
import PropTypes from 'prop-types';
import './cards.css'

function Card({title, imageSource, text, url}) {

  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">

      <div className="overflow">
        
        <img src={imageSource} alt="" className='card-img-top ' />

      </div>

      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {
            text ? text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odio, quo velit sed saepe amet omnis incidunt vel expedita facere vero quas sapiente temporibus. Quam necessitatibus quo doloribus error similique!'
          }
        </p>
        <a href={url} className='btn btn-outline-secondary rounded-0' target="_blank">
          Go to this web site
        </a>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string
}

export default Card