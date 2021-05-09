import PropTypes from 'prop-types';

const PhotoDescription = ({ description }) => {
    return (
        <div className="card__description">
            {description}
        </div>
    );
}

PhotoDescription.propTypes = {
    description: PropTypes.array,
}

export { PhotoDescription as default };