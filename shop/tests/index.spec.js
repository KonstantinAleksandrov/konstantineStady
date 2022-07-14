

describe("My first test case", () => {
  beforeEach(() => {
    console.log("Тут готовим компоненты для тестирования")
  })

  afterEach(() => {
    console.log("Чистим окружение, для следующего кейса")
  })

  it("test", () => {
    expect(true) // Сам тест
  })
})