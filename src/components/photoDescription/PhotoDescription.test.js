import { shallow } from 'enzyme';
import PhotoDescription from './PhotoDescription';

test('renders component correctly', () => {
    const wrapper = shallow(<PhotoDescription />)
    expect((wrapper)).toMatchSnapshot();
});