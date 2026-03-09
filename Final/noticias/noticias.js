const noticias = [

{
titulo:"ITEL conquista medalhas na IENA",
imagem:"/Final/noticias/imgNoticias/iena.jpg",
texto:"Estudantes do Instituto de Telecomunicações representaram Angola na Feira Internacional de Invenções e Ideias realizada na Alemanha. Os projetos apresentados destacaram-se pela inovação tecnológica e criatividade dos estudantes."
},

{
titulo:"FITITEL apresenta projetos inovadores",
imagem:"/Final/noticias/imgNoticias/fititel.jpg",
texto:"A Feira de Inovação Tecnológica do ITEL reuniu estudantes, professores e empresas tecnológicas para apresentar projetos desenvolvidos nas áreas de telecomunicações, informática e eletrónica."
},

{
titulo:"Semana da Informática",
imagem:"/Final/noticias/imgNoticias/semana.jpg",
texto:"Durante a semana da informática os estudantes apresentaram softwares, sistemas web e aplicações desenvolvidas durante o ano académico."
},

{
titulo:"Semana da Multimédia",
imagem:"/Final/noticias/imgNoticias/semanaMu.jpg",
texto:"Projetos de design gráfico, edição de vídeo, fotografia e animação digital foram apresentados pelos estudantes."
},

{
titulo:"Semana da Electrónica",
imagem:"/Final/noticias/imgNoticias/capsemanaeele.jpg",
texto:"Os estudantes apresentaram circuitos eletrónicos, projetos de automação e sistemas inteligentes desenvolvidos nos laboratórios."
},

{
titulo:"ITEL Solidário",
imagem:"/Final/noticias/imgNoticias/sok.jpg",
texto:"Estudantes participaram em ações sociais que ajudaram comunidades locais com doações e atividades solidárias."
},

{
titulo:"Torneio de Futebol do ITEL",
imagem:"/Final/noticias/imgNoticias/fut.jpg",
texto:"O torneio de futebol reuniu estudantes de vários cursos promovendo o espírito de equipa e a prática desportiva."
},

{
titulo:"Sextas Culturais",
imagem:"/Final/noticias/imgNoticias/Amor.jpg",
texto:"As sextas culturais são eventos realizados no final de cada mês que promovem música, dança e atividades culturais."
},

{
titulo:"Projetos de Robótica",
imagem:"/Final/noticias/imgNoticias/robo.jpg",
texto:"Estudantes desenvolveram robôs capazes de executar tarefas automatizadas utilizando sensores e microcontroladores."
},

{
titulo:"Inovação em Telecomunicações",
imagem:"/Final/noticias/imgNoticias/electr.jpeg",
texto:"Novas soluções de comunicação digital foram apresentadas pelos estudantes durante o evento tecnológico."
},

{
titulo:"Hackathon Tecnológico",
imagem:"/Final/noticias/imgNoticias/magui.jpg",
texto:"Programadores participaram num desafio intensivo de desenvolvimento de software criando soluções tecnológicas."
},

{
titulo:"Formação em Redes",
imagem:"/Final/noticias/imgNoticias/redes.jpg",
texto:"Treinamentos avançados em redes de computadores foram realizados para fortalecer as competências técnicas."
},

{
titulo:"Laboratórios Modernizados",
imagem:"/Final/noticias/imgNoticias/laboartorios.jpeg",
texto:"Novos equipamentos tecnológicos foram instalados nos laboratórios para melhorar o ensino prático."
},

{
titulo:"Estudantes premiados",
imagem:"/Final/noticias/imgNoticias/setudantesPremiados.jpg",
texto:"Diversos estudantes receberam prémios por desempenho académico e inovação tecnológica."
},

{
titulo:"Semana da Tecnologia",
imagem:"/Final/noticias/imgNoticias/ftura.jpg",
texto:"Evento reuniu especialistas e estudantes para debater o futuro da tecnologia em Angola."
},

{
titulo:"Novos cursos tecnológicos",
imagem:"/Final/noticias/imgNoticias/electr.jpeg",
texto:"O ITEL anunciou novos cursos voltados para tecnologias emergentes."
},

{
titulo:"Parcerias com empresas",
imagem:"/Final/noticias/imgNoticias/taag.jpg",
texto:"Empresas tecnológicas firmaram parcerias com o ITEL para estágios e projetos de inovação."
},

{
titulo:"Projeto de Inteligência Artificial",
imagem:"/Final/noticias/imgNoticias/ia.jpg",
texto:"Estudantes desenvolveram sistemas baseados em inteligência artificial aplicados à análise de dados."
},

{
titulo:"Eventos académicos",
imagem:"/Final/noticias/imgNoticias/eventos.jpg",
texto:"Diversos eventos académicos foram realizados promovendo troca de conhecimento."
},

{
titulo:"Futuro da tecnologia",
imagem:"img/noticia20.jpg",
texto:"Especialistas discutiram tendências tecnológicas e oportunidades para jovens estudantes."
}

];


const botoes=document.querySelectorAll(".saber-mais")
const modal=document.getElementById("modal")
const titulo=document.getElementById("modal-titulo")
const texto=document.getElementById("modal-texto")
const imagem=document.getElementById("modal-img")
const fechar=document.querySelector(".fechar")

botoes.forEach(botao=>{
botao.addEventListener("click",()=>{
let id=botao.dataset.id
titulo.innerText=noticias[id].titulo
texto.innerText=noticias[id].texto
imagem.src=noticias[id].imagem
modal.style.display="flex"
})
})

fechar.onclick=()=>modal.style.display="none"
window.onclick=(e)=>{if(e.target==modal)modal.style.display="none"}