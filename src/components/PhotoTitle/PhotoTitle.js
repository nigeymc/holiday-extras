import PropTypes from 'prop-types';

const PhotoTitle = ({ link, title, author }) => {
    return (
        <div className="card__title">
            <a className="title__primary" href={link} target="_blank" rel="noreferrer" title={title ? title : "A Flickr Photo Stream Image"}>{title ? title : "A Flickr Photo Stream Image"}</a> <span className="card__title--byLine">by {author}</span>
        </div>
    );
}

PhotoTitle.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string
}

export { PhotoTitle as default };