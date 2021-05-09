import PropTypes from 'prop-types';

const PhotoTags = ({ tags }) => {
    return (
        <div className="card__tags">
            {tags && `Tags: ${tags.replace(" ", ", ")}`}
        </div>
    );
}

PhotoTags.propTypes = {
    tags: PropTypes.string
}

export { PhotoTags as default };