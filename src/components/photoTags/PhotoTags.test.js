import { shallow } from 'enzyme';
import PhotoTags from './PhotoTags';

test('renders component correctly', () => {
    const wrapper = shallow(<PhotoTags />)
    expect((wrapper)).toMatchSnapshot();
});