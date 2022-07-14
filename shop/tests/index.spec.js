let history = []
const old_console = console.log

describe("My first test case", () => {
  beforeEach(() => {
    console.log = (...args) => {
      history.push(args)
      old_console.apply(this, args)
    }
  })

  afterEach(() => {
    history = []
  })

  it("test", () => {
    expect(true)
  })
})