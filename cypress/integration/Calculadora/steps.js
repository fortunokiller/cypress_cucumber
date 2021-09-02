Given(/^que eu acesso a calculadora$/, () => {
	cy.visit('http://kylbutlr-calculator.herokuapp.com/')
});

Then(/^desejo realizar uma "([^"]*)"$/, (operacaoDesejada) => {

    let operador;
    switch(operacaoDesejada){
        case 'soma':
            operador='+'
            break;
        case 'subtração':
            operador='-'
            break;
        case 'multiplicação':
            operador='x'
            break;
        case 'divisão':
            operador='÷'
            break;
        default:
            break;
    }
	Cypress.env('operador', operador)
});

When(/^informar os valores "([^"]*)" e "([^"]*)"$/, (args1,args2) => {
	cy.get('div[class=button], .button.zero').as('valores');
    cy.get('div[class="button operator"]').as('operadores');
    
    //informar o valor 1
    //clicar no operador [soma]
    //infomrar o valor 2
    cy.get('@valores').contains(args1).click()
    cy.get('@operadores').contains(`${Cypress.env('operador')}`).click()
    cy.get('@valores').contains(args2).click()
});

When(/^finalizar a conta$/, () => {
	cy.get('div[class="button operator button-bottom"]').click()
});

Then(/^deve retornar o resultado "([^"]*)"$/, (resultadoEsperado) => {
	cy.get('div[class=display]').as('resultado');
    cy.get('@resultado').invoke('text').should('be.equal',resultadoEsperado)
});
