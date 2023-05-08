const postagens = [
    {
        fotoUsuario: 'https://pbs.twimg.com/profile_images/1637490944923533313/crRnyinU_400x400.jpg',
        nome: 'bla bla',
        usarname: 'blabal234',
        tempoDePostagem: 38,
        conteudo: 'pouco se fala sobre a NECESSIDADE de fazerem um filme solo do burro',
        imagem: 'https://pbs.twimg.com/media/FvoRAfVWIAUo_2Q?format=jpg&name=small',
        comentario: 195,
        rt: 200,
        like: 243,
        vizu : 361
    },
    {
        fotoUsuario: 'https://pbs.twimg.com/profile_images/1637490944923533313/crRnyinU_400x400.jpg',
        nome: 'bla bla',
        usarname: 'blabal234',
        tempoDePostagem: 38,
        conteudo: 'o ônibus aqui da cidade tem acento reclinável 😍🧡',
        imagem: 'https://pbs.twimg.com/media/FvoRlQJWcAEPLt7?format=jpg&name=small',
        comentario: 195,
        rt: 200,
        like: 243,
        vizu : 361
    },
    {
        fotoUsuario: 'https://pbs.twimg.com/profile_images/1637490944923533313/crRnyinU_400x400.jpg',
        nome: 'bla bla',
        usarname: 'blabal234',
        tempoDePostagem: 38,
        conteudo: 'quero agradecer ao engenheiro que resolveu o problema de goteira na minha casa, deu tudo cert…',
        imagem: 'https://pbs.twimg.com/media/FvoPG_AWYAwSS7B?format=jpg&name=small',
        comentario: 195,
        rt: 200,
        like: 243,
        vizu : 361
    }
]
const cards = document.querySelector('.cards')
function createCard(post) {
    return `
        <section class="card">
            <img src="${post.fotoUsuario}" class="foto-perfil" alt="foto do usuario">
            <div class="conteudo">
                <p>${post.nome} <span class="username">@${post.usarname} • ${post.tempoDePostagem} min</span></p>
                <p>
                    ${post.conteudo}
                </p>
                <img src="${post.imagem}" class="foto-conteudo">
                <section class="action">
                    <div>
                        <img src="function/chat.svg" alt="">
                        ${post.comentario}
                    </div>
                    <div>
                        <img src="function/retweet.svg" alt="">
                        ${post.rt}
                    </div>
                    <div>
                        <img src="function/coracao.svg" alt="">
                        ${post.like}
                    </div>
                    <div>
                        <img src="function/grafico.svg" alt="">
                        ${post.vizu}
                    </div>
                </section>
            </div>
        </section>
    `
}
postagens.forEach((post) => {
   cards.innerHTML +=  createCard(post)
})
