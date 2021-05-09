import { shallow } from 'enzyme';
import SearchInput from './SearchInput';

test('renders component correctly', () => {
    const wrapper = shallow(<SearchInput />)
    expect((wrapper)).toMatchSnapshot();
});