import './styles/styles.scss';
import { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import parse from 'html-react-parser';
import { AppContext } from './context/AppContext';
import PhotoCard from './components/photoCard/PhotoCard';
import Image from './components/image/Image';
import PhotoTitle from './components/PhotoTitle/PhotoTitle';
import PhotoDescription from './components/photoDescription/PhotoDescription';
import PhotoTags from './components/photoTags/PhotoTags';
import SearchInput from './components/searchInput/SearchInput';

const App = () => {
  const { ...flickrData } = useContext(AppContext);

  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const filter = Object.values(flickrData).filter((item) => {
    if (item.tags !== "" && item.tags.toLowerCase().includes(text.toLocaleLowerCase().trim())) {
      return item
    }
  });

  const data = !text ? flickrData : filter;

  const photosData = Object.values(data).map((photo) => (
    <PhotoCard key={uuidv4()}>
      <Image key={uuidv4()}
        media={Object.values(photo.media).map((item) => item)}
        title={photo.title}
      />

      <PhotoTitle key={uuidv4()}
        link={photo.link} title={photo.title} author={photo.author}
      />

      <PhotoDescription key={uuidv4()}
        description={parse(photo.description)}
      />

      <PhotoTags key={uuidv4()}
        tags={photo.tags}
      />
    </PhotoCard>
  ));

  return (
    <div className="app" data-testid="app">
      <div className="app__container">
        <header className="app__header">
          <h1>Flickr Photo Stream</h1>
        </header>
        <main className="app__photo-stream">
          <SearchInput searchTerm={text} handleChange={handleChange} />
          {photosData}
        </main>
      </div>
    </div>

  );
}

export default App;
