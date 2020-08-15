import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Accordian from './Accordian'


const sectionProp = [
    {
        title: 'Section 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        title: 'Section 2',
        content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
      },
      {
        title: 'Section 3',
        content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
      },
]

describe('Accordian Component', () => {
    it ('render empty given no Accordian without errors', () => {
        const wrapper = shallow(<Accordian />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})