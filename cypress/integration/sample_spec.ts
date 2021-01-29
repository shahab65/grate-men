describe("my first test", function () {
  it("does not do much", function () {
    expect(true).to.equal(true);
  });
});

describe("visits ", function () {
  it("google", function () {
    cy.visit("https://google.com");
  });
  it("create react app", function () {
    cy.visit("http://localhost:3000/");
  });
  it("create react app", function () {
    cy.visit("http://localhost:3000/");
    cy.contains("shahab");
  });
});

describe("click", function () {
  it("click on button", function () {
    cy.visit("http://localhost:3000/");
    cy.contains("click me").click();
  });
});

describe("router and links", function () {
  it("go to students page", function () {
    cy.visit("http://localhost:3000/");
    cy.contains("google").click();
    cy.url().should("include", "students");
  });
});

describe("inputs", function () {
  it("typing in input", function () {
    cy.visit("http://localhost:3000/");
    cy.get("input")
      .type("test@gmail.com")
      .should("have.value", "test@gmail.com");
  });
});
