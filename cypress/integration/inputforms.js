describe("Clicking on all fixtures under input forms", function(){
    it("launch application",function(){
        cy.visit("https://demo.seleniumeasy.com/");
    });
    it("INPUTFORMS - I should be able to click all easy forms demo", function(){
        cy.get('.at-cm-no-button').click();
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').click();
        cy.get('.open > .dropdown-menu > :nth-child(1) > a').click();
        cy.get('.form-group > #user-message').type("Automation testing");
        cy.get('#get-input > .btn').click();
        cy.get('#sum1').type("70");
        cy.get('#sum2').type("50");
        cy.get('#gettotal > .btn').click();
    });
    describe("Clicking on all fixtures under checkbox demo", function(){
        it("launch application",function(){
            cy.visit("https://demo.seleniumeasy.com/");
        });
        it("CHECKBOX DEMO - I should be able to click all check box demo", function(){
            cy.get('.at-cm-no-button').click();
            cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').click();
            cy.get('.open > .dropdown-menu > :nth-child(2) > a').click();
            cy.get('#isAgeSelected').click();
            cy.get(':nth-child(3) > label > .cb1-element').click();
            cy.get(':nth-child(4) > label > .cb1-element').click();
            cy.get(':nth-child(5) > label > .cb1-element').click();
            cy.get(':nth-child(6) > label > .cb1-element').click();
            cy.get('#check1').click();
            cy.get('#check1').click();
            cy.get('#check1').click();
        });
    });
        });
        describe("Clicking on all fixtures under radio button demo", function(){
            it("launch application",function(){
                cy.visit("https://demo.seleniumeasy.com/");
            });

            it("RADIO BUTTON DEMO - I should be able to click all radio button demo", function(){
                cy.get('.at-cm-no-button').click();
                cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').click();
                cy.get('.open > .dropdown-menu > :nth-child(3) > a').click();
                cy.get('.panel-body > :nth-child(2) > input').click();
                cy.get('.panel-body > :nth-child(3) > input').click();
                cy.get('.panel-body > :nth-child(2) > input').click();
                cy.get('#buttoncheck').click();
                cy.get('.panel-body > :nth-child(2) > :nth-child(3) > input').click();
                cy.get('.panel-body > :nth-child(2) > :nth-child(2) > input').click();
                cy.get(':nth-child(3) > :nth-child(2) > input').click();
                cy.get(':nth-child(3) > :nth-child(3) > input').click();
                cy.get(':nth-child(4) > input').click();
                cy.get('.panel-body > .btn').click();
 });
});
describe("Clicking on all fixtures under select dropdown demo", function(){
    it("launch application",function(){
        cy.visit("https://demo.seleniumeasy.com/");
    });

    it("SELECT DROPDOWN - I should be able to click all select dropdown demo", function(){
        cy.get('.at-cm-no-button').click();
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').click();
        cy.get('.open > .dropdown-menu > :nth-child(4) > a').click();
        cy.get('#select-demo').select('Monday').should('have.value', 'Monday');
        cy.get('[value="California"]').click();
        cy.get('[value="Florida"]').click();
        cy.get('[value="New Jersey"]').click();
        cy.get('[value="New York"]').click();
        cy.get('[value="Ohio"]').click();
        cy.get('[value="Texas"]').click();
        cy.get('[value="Pennsylvania"]').click();
        cy.get('[value="Washington"]').click();
        cy.get('#printMe').click();
        cy.get('#printAll').click();
    });
    describe("Clicking on all fixtures input forms submit", function(){
        it("launch application",function(){
            cy.visit("https://demo.seleniumeasy.com/");
        });
        it("INPUT FORM SUBMIT - I should be able to click all input form submit fixtures", function(){
            cy.get('.at-cm-no-button').click();
            cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').click();
            cy.get('.open > .dropdown-menu > :nth-child(5) > a').click();
            cy.get(':nth-child(2) > .inputGroupContainer > .input-group > .form-control').type("Popoola");
            cy.get(':nth-child(3) > .inputGroupContainer > .input-group > .form-control').type("Ibukun Micheal");
            cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control').type("ibkpopoola12@gmail.com");
            cy.get(':nth-child(5) > .inputGroupContainer > .input-group > .form-control').type("8096886371");
            cy.get(':nth-child(6) > .inputGroupContainer > .input-group > .form-control').type("lakeview amuwo lagos");
            cy.get(':nth-child(7) > .inputGroupContainer > .input-group > .form-control').type("Festac, Lagos");
});
    });
});