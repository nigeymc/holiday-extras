import PropTypes from 'prop-types';
const Image = ({ media, title }) => {

    return (
        <div className="card__image-container">
            <div className="image-container__overflow">
                <img src={media} alt={title ? title : "A Flickr Photo Stream Image"} />
            </div>
        </div>
    );
}

Image.propTypes = {
    media: PropTypes.array,
    title: PropTypes.string
}

export { Image as default };