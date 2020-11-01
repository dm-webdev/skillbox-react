test('some', () => {
  expect(true).toBe(true);
});

test("Hello my first test", ()=>{ //название содержит исходные данные и результат

});

test("should return 2 when add one and one", ()=>{
  expect(1 + 1).toBe(2);
});

describe("Add operator", ()=>{        //название по названию функции
  test("should return 2 when add one and one", ()=>{
    expect(1 + 1).toBe(2);
  });

  describe("again", ()=>{     //describe можно вкладывать в describe, но нельзя вкладывать в тест
    test("more", ()=>{})
  })
})