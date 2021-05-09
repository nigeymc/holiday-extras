import { shallow } from 'enzyme';
import Phototitle from './PhotoTitle';

test('renders component correctly', () => {
    const wrapper = shallow(<Phototitle />)
    expect((wrapper)).toMatchSnapshot();
});