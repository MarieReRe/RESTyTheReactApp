import React from 'react';
import { shallow, mount } from 'enzyme';



import Form from '../../components/form/form';


// [] 1. Does it properly store the users input into state?
// [] 2.  Does it properly display the users input in the output area on form submit?
// [] 3. Does it properly clear the form/state after the form is submitted?
// [] 4. Do the method selectors/checkboxes obey your styling rules?

describe('<Form />', () => {
    //test 2
    it(' displays the users input in the output', () => {
        let app = mount(<Form/>);

        //Act
        let input = app.find('input');
        input.simulate('change', { target: { value: 'www' } });

        let method = app.find('#get');
        method.simulate('click');

        expect(app.state('method')).toBe('get');
        expect(app.find('#get').props().className).toBe('active');
        expect(app.find('#get').hasClass('active')).toBe(true);

        let form = app.find('form');
        form.simulate('submit');

        expect(app.find('span.url').text()).toBe('www');

        expect(app.find('input').props().value).toBeFalsy();
        expect(app.find('#get').hasClass('active')).toBe(false);
    });
});