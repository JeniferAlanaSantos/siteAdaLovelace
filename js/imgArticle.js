/**
 * Método responsável por transformar o
 * background-image dos articles em suas
 * respectivas imagens (caso houver)
 */
for (let i = 1; i <= 4; i++) {
    try {
        let url = $(`article#_${i} img`).attr('src')
        $(`article#_${i}`)
        .css('background-image', `url(${url})`)
    } catch {
        // se der erro, não acontece nada
    }
}


/**
 * Método responsável por ativar um som
 * quando o mouse passar por cima de uma
 * imagem dos articles
 */
const audio = document.querySelector('audio')
audio.volume = .7
$('article img').on('mouseenter', () => {
    audio.play()
}).on('mouseleave', () => {
    audio.currentTime = 0
    audio.pause()
})
