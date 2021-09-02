Feature: Calculadora

    Eu como um usuário, desejo utilizar a calculadora para realizar operações matemáticas

Scenario:Calcular minha idade
    Given que eu acesso a calculadora
    And desejo realizar uma "soma"
    When informar os valores "6" e "7"
    And finalizar a conta
    Then deve retornar o resultado "13"
    

    