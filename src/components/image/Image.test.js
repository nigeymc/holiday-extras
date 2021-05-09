import { shallow } from 'enzyme';
import Image from './Image';

test('renders component correctly', () => {
    const wrapper = shallow(<Image />)
    expect((wrapper)).toMatchSnapshot();
});