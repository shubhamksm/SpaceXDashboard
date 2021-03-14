import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import Filters from './';
import { filtersLaunchYears } from '../../constants';

describe("Snapshot Test - Filters", () => {
  it('Should show all filters', () => {
    const component = renderer.create(<Filters
      heading="Launch Year"
      _key="launch_year"
      filterData={filtersLaunchYears}
      selected={2006}
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Content Check - Filters", () => {
  it('Should have correct details and classNames', () => {
    const component = shallow(<Filters
      heading="Launch Year"
      _key="launch_year"
      filterData={filtersLaunchYears}
      selected={2006}
    />);

    expect(component.find("header").text()).toEqual("Launch Year");
    expect(component.find(".selected").text()).toEqual("2006");
  });
});