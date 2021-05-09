import { useMemo } from 'react';
import useAxios from 'axios-hooks';

const useFlickr = () => {
    const [{ data, loading, error }] = useAxios({
        url: 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true',
    })

    const flickrData = useMemo(
        () => (data ? data.items.map((photo) => photo) : []),
        [data],
    );

    return [{ data, loading, error, flickrData }];
}

export { useFlickr as default };