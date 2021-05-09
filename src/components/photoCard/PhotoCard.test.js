import { shallow } from 'enzyme';
import PhotoCard from './PhotoCard';

test('renders component correctly', () => {
    const wrapper = shallow(<PhotoCard />)
    expect((wrapper)).toMatchSnapshot();
});