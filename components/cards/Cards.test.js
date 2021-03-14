import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import Cards from './';

describe("Snapshot Test - Cards", () => {
  it('Should display mission details', () => {
    const component = renderer.create(<Cards 
      imgSrc="https://images2.imgbox.com/a0/cb/s1h2RuR0_o.png"
      title="FalconSat #1"
      missionIds={[123456, 123456, 123456]}
      launch_year={2006}
      launch_success={true}
      land_success={true}
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Content Check - Cards", () => {
  it('Should have correct details and display', () => {
    const component = shallow(<Cards 
      imgSrc="https://images2.imgbox.com/a0/cb/s1h2RuR0_o.png"
      title="FalconSat #1"
      missionIds={[123456, 123456, 123456]}
      launch_year={2006}
      launch_success={true}
      land_success={true}
    />);

    expect(component.find("h4").text()).toEqual("FalconSat #1");
  });
});