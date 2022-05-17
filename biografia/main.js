function modoNoturno() {
    let main = document.querySelector('.principal')
    let botao = document.querySelector('.modo_noturno')
    let botao_luz = document.querySelector('.modo_luz')
    let textos = document.querySelector('.textos')
    

    textos.style.color = 'white'
    main.style.backgroundColor = 'rgb(25, 25, 25)'
    botao.style.display = 'none'
    botao_luz.style.display = 'block'
    
}

function modoLuz() {
    let main = document.querySelector('.principal')
    let botao = document.querySelector('.modo_noturno')
    let botao_luz = document.querySelector('.modo_luz')
    let textos = document.querySelector('.textos')

    textos.style.color = 'black'
    main.style.backgroundColor = '#f3f2ef'
    botao_luz.style.display = 'none'
    botao.style.display = 'block'
}