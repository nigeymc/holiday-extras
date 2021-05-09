import PropTypes from 'prop-types';

const PhotoCard = ({ children }) => {
    return (
        <div className="photo-stream__card">
            {children}
        </div>
    );
}

PhotoCard.propTypes = {
    children: PropTypes.node
}

export { PhotoCard as default };