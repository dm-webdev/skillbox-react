/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, mount, render } from "enzyme"; //тестирование компонентов!!!! специальная библиотека Звездочки - специальный комментарий для работы с DOM средой!!!
import { Dropdown } from "../Dropdown";

describe("Dropdown", () => {
  test("should render", () => {
    const wrapper = shallow(<Dropdown children={<div />} button={<button />} id={"10"}/>)
    expect(wrapper).toBeDefined(); // проверка на рендер не null не undefinid
    console.log(wrapper.find("div.container").debug());
    expect(wrapper.find("#button")).toBeDefined(); //проверка что зарендерена кнопка, где find - поиск кнопки
    // console.log(wicndow);
    expect(wrapper.find("div.container").isEmptyRender()).toBeFalsy();
  });

  test('should render (snapshot)', () => {
    const wrapper = shallow(<Dropdown children={<div />} button={<button />} id={"10"}/>) //создание слепка объекта
    expect(wrapper).toMatchSnapshot()
  });
});