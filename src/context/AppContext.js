import { createContext } from 'react';
import PropTypes from 'prop-types';
import useFlickr from '../custom-hooks/useFlickr';
import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const [{ loading, error, flickrData }] = useFlickr();

    if (loading) return (<LoadingSpinner />);
    if (error) return <p role="alert">Error fetching content!</p>

    return (
        <AppContext.Provider value={flickrData}>
            {children}
        </AppContext.Provider>
    )
}

AppContextProvider.propTypes = {
    children: PropTypes.node
}

export { AppContextProvider as default };