let recipes = [
  {
    receita: "Barrinhas de cereal",
    ingredientes:
      "1 xícara de nozes, 1 xícara de frutas secas, 1 xícara de tâmaras secas sem caroço",
    ingredientesBase: {
      0: "3",
      1: "Nozes",
      2: "Frutas secas",
      3: "Tamaras",
    },
    modoPreparo:
      "Bata todos os ingredientes em um processador por cerca de dois minutos, até que formem uma massa. Embrulhe a mistura em um papel filme e leve à geladeira por algumas horas até sentir que a massa está dura. Corte em formato de barras e conserve na geladeira.",
    link_imagem: "http://data.whicdn.com/images/25686711/large.jpg",
  },

  {
    receita: "Mousse de limão",
    ingredientes:
      "1 lata de leite condensado, 1 lata de creme de leite, 1/2 xícara de limão espremido",
    ingredientesBase: {
      0: "3",
      1: "Leite condensado",
      2: "Creme de leite",
      3: "Limao",
    },
    modoPreparo:
      "Coloque o creme de leite e o leite condensado no liquidificador, bata um pouco e acrescente o suco de limão aos poucos. Quando a massa ficar consistente, coloque em um recipiente de vidro e leva à geladeira.",
    link_imagem: "http://data.whicdn.com/images/78859362/large.jpg",
  },

  {
    receita: "Sorvete caseiro",
    ingredientes:
      "1 lata de leite condensado, 1 lata de creme de leite, 1 pacote de gelatina do seu sabor preferido",
    ingredientesBase: {
      0: "3",
      1: "Leite condensado",
      2: "Creme de leite",
      3: "Gelatina",
    },
    modoPreparo:
      "Prepare a gelatina normalmente (sem levar à geladeira) e enquanto ela ainda estiver quente bata no liquidificador junto com o creme de leite e o leite condensado. Coloque para congelar em um refratário com tampa, bata na batedeira (enquanto estiver congelado) e leve ao freezer novamente.",
    link_imagem:
      "http://www.receitasanamaria.net/wp-content/uploads/2013/11/Receita-Sorvete-de-Gelatina.jpg",
  },

  {
    receita: "Pão de queijo",
    ingredientes:
      "1 caixa de creme de leite, 1 copo de queijo parmesão ralado, 1 copo de polvilho doce",
    ingredientesBase: {
      0: "3",
      1: "Creme de leite",
      2: "Queijo parmesao",
      3: "Polvilho doce",
    },
    modoPreparo:
      "Pré aqueça o forno enquanto amassa todos os ingredientes até eles formarem uma massa (que não grude nas mãos), faça bolinhas e coloque para assar em uma forma untada.",
    link_imagem: "http://data.whicdn.com/images/70651372/large.jpg",
  },

  {
    receita: "Bolo para café da tarde",
    ingredientes:
      "3 ovos, 2/3 de xícara de farinha com fermento, 1/2 xícara de açúcar refinado",
    ingredientesBase: {
      0: "3",
      1: "Ovos",
      2: "Farinha",
      3: "Fermento",
    },
    modoPreparo:
      "Pré aqueça o forno a 190ºC. Em uma tigela, bata os ovos e o açúcar até que formem um creme, depois misture a farinha. Coloque a massa em uma forma untada e asse.",
    link_imagem: "http://re.i.uol.com.br/album/bolos_f_030.jpg",
  },

  {
    receita: "Massa de pizza",
    ingredientes:
      "1 xícara de farinha pronta com fermento, 1 xícara de iogurte Grego ou natural",
    ingredientesBase: {
      0: "3",
      1: "Farinha",
      2: "Iogurte",
      3: "Fermento",
    },
    modoPreparo:
      "Em uma tigela, misture a farinha e o iogurte; misture a massa até formar uma bola. Coloque a massa em uma superfície enfarinhada e deixe sovar por 5-8 minutos. Com um rolo de macarrão, deixe a massa em formato de pizza e depois adicione as coberturas. Pré-aqueça o forno. Coloque a pizza no forno em temperatura máxima por 12 minutos.",
    link_imagem: "https://i.ytimg.com/vi/YsDOmKuuhCU/maxresdefault.jpg",
  },

  {
    receita: "Biscoito de banana com aveia",
    ingredientes: "2 bananas bem maduras, 1 xícara de aveia",
    ingredientesBase: {
      0: "2",
      1: "Banana",
      2: "Aveia",
    },
    modoPreparo:
      "Amasse as bananas e acrescente a aveia, misturando bem. Depois, faça bolinhas no formato de pequenos biscoitos e coloque para assar em uma forma untada por 15 minutos em forno pré-aquecido a 175 graus. Se você quiser, também pode adicionar uma pitada de canela em pó, um punhadinho de frutos secos — como nozes e amêndoas, por exemplo — ou gotinhas de chocolate para incrementar as bolachas.",
    link_imagem:
      "http://2.bp.blogspot.com/-z76HK5d0XFg/Uc9-1u90OvI/AAAAAAAAGJA/bbNYTJIpUQc/s1600/DSCF5995.JPG",
  },

  {
    receita: "Pão de queijo (sem fermento)",
    ingredientes:
      "1 caixinha de creme de leite (200 ml), 1 copo (requeijão) de queijo ralado (misturei parmesão e mussarela ralada), 1 copo (requeijão) de polvilho (usei polvilho doce)",
    ingredientesBase: {
      0: "3",
      1: "Creme de leite",
      2: "Queijo ralado",
      3: "Polvilho",
    },
    modoPreparo:
      "Amasse até soltar das mãos (caso precise um pouquinho a mais de polvilho, coloque aos poucos até que chegue ao ponto de enrolar). Faça bolinhas, coloque em forma untada e asse em forno pré-aquecido bem quente. Se achar necessário, acrescente sal. Asse até ficarem douradinhos levemente.",
    link_imagem:
      "http://ccook3.vila.to/receita/pao-de-queijo-de-liquidificador-f8-5282.jpg",
  },

  {
    receita: "Massa com queijo",
    ingredientes: "100 g de massinha, 400 ml de leite, 80 g de queijo",
    ingredientesBase: {
      0: "3",
      1: "Massa",
      2: "Leite",
      3: "Queijo",
    },
    modoPreparo:
      "Cozinhar a massa e durante este tempo preparamos o molho: esquentamos o leite, acrescentamos o queijo já ralado (emmental, cheddar ou parmesão), deixamos o queijo derreter e paramos a fervura. Escorremos a massa e colocamos o molho por cima. Envolvemos a massinha com o molho e servimos.",
    link_imagem:
      "http://www.jornaldaorla.com.br/arquivos/noticia/2014_5_6_15_47_56_2082.jpg",
  },

  {
    receita: "Frango Caramelizado",
    ingredientes:
      "200 ml de Coca-Cola, 50ml de molho de soja, 10 coxas de frango",
    ingredientesBase: {
      0: "3",
      1: "Coca cola",
      2: "Molho de soja",
      3: "Frango",
    },
    modoPreparo:
      "Escolher uma Coca-Cola normal e não light ou diet. Coloque a Coca e o molho de soja numa panela e as coxas de frango. Deixe cozinhar lentamente, por tempo suficiente para que a carne do frango comece a soltar do osso, umas 4 a 5 horas. Retire as coxas e deixe o molho reduzir até ter uma textura de cobertura, uma calda. Derrame sobre as coxas e sirva com arroz branco.",
    link_imagem:
      "http://visaoregional.com.br/wp-content/uploads/2016/01/frango-caramelizado.jpg",
  },

  {
    receita: "Rosas do deserto",
    ingredientes: "100 g de chocolate, 60g de corn-flakes, 20g de manteiga",
    ingredientesBase: {
      0: "3",
      1: "Chocolate",
      2: "Corn-flakes",
      3: "Manteiga",
    },
    modoPreparo:
      "Derreta o chocolate e a manteiga no micro-ondas ou no banho-maria. Uma vez derretidos, derrame esta mistura nos corn-flakes e envolva-os delicadamente com o chocolate. Faça a seguir pequenos montinhos com a ajuda de uma colher e coloque suas rosas do deserto sobre uma folha de papel manteiga ou em forminhas de papel. Deixe esfriar e endurecer na geladeira por mais ou menos uma hora, antes de se deliciar com elas…",
    link_imagem:
      "http://2.bp.blogspot.com/-bpPL2Itopgw/UX8K9Ix4FzI/AAAAAAAAAwU/yjKEzLbDzwQ/s1600/IMG_2120.JPG",
  },

  {
    receita: "Bolo de caneca",
    ingredientes: "1 ovo, 1 colher (de sopa) de cacau em pó, 50 g de açúcar",
    ingredientesBase: {
      0: "2",
      1: "Ovo",
      2: "Cacau em po",
    },
    modoPreparo:
      "O bolo de caneca, é o bolo o mais rápido e simples do mundo! Um bolo com uma simples caneca como vasilha e alguns minutos de cozimento no micro-ondas… Misture o ovo e o açúcar na caneca, acrescente o cacau em pó e leve para assar no micro-ondas por 60 segundos, no máximo. Tire sua caneca do forno, espere alguns minutos e saboreie!",
    link_imagem:
      "http://s.glbimg.com/po/rc/media/2015/04/20/11_58_24_10_bolo_caneca1.jpg",
  },

  {
    receita: "Mingau de Aveia",
    ingredientes:
      "50 g de flocos de aveia, 300 ml de leite, 8 g de açúcar baunilhado",
    ingredientesBase: {
      0: "3",
      1: "Flocos de aveia",
      2: "Leite",
      3: "Acucar baunilhado",
    },
    modoPreparo:
      "Aquecer o leite, o açúcar e os flocos de aveia numa panela. Deixar cozinhar em fogo baixo, mexendo sempre. Sirva em tigelinha e, se quiser, pode colocar uma pitada de canela em pó, frutas cristalizadas ou outro complemento. Você tem um porridge caseiro (mingau de aveia), para comer no café da manhã ou um lanchinho entre as refeições…",
    link_imagem:
      "http://www.musculacao.net/wp-content/uploads/2014/10/Mingau-de-aveia-com-queijo-fresco.jpg",
  },

  {
    receita: "Brigadeiro de Colher",
    ingredientes:
      "1 lata de leite condensado, 1 colher (sopa) manteiga e 2 colheres (sopa) chocolate em pó",
    ingredientesBase: {
      0: "3",
      1: "Leite condensado",
      2: "Manteiga",
      3: "Chocolate em po",
    },
    modoPreparo:
      "Misture o leite condensado, a manteiga, o creme de leite e o chocolate em pó em uma panela. Leve a panela ao fogo. Mexa bem até levantar um pouco de fervura e abaixe o fogo. Misture o chocolate meio amargo derretido no microondas. Espere esfriar, decore com confeitos coloridos ou chocolate granulado e está pronto.",
    link_imagem:
      "http://receitasde.blog.br/wp-content/uploads/2015/05/brigadeiro-de-colher.jpg",
  },

  {
    receita: "Frozen iogurte de morango",
    ingredientes:
      "4 potes de iogurte natural desnatado 1, 1/2 xícaras de chá de morangos congelados, 6 envelopes de adoçante",
    ingredientesBase: {
      0: "2",
      1: "Iogurte",
      2: "Morango",
    },
    modoPreparo:
      "Deixe o iogurte dessorar por 1 hora colocando os 4 potes de iogurte em um filtro de papel para café Despeje em uma vasilha e leve ao freezer para congelar Junte o iogurte com o morango no liquidificador (ambos congelados) Bata até misturar, junte o adoçante e misture Coloque em um refratário, cubra com papel filme bem junto ao refratário e leve ao freezer até servir",
    link_imagem: "http://data.whicdn.com/images/25686711/large.jpg",
    link_imagem:
      "http://photos1.blogger.com/blogger/5780/1852/1600/DSCF0347.jpg",
  },

  {
    receita: "Baked potato (requeijao e parmesao)",
    ingredientes: "1 batata grande, requeijão, parmesão",
    ingredientesBase: {
      0: "3",
      1: "Batata",
      2: "Requeijao",
      3: "Parmesao",
    },
    modoPreparo:
      "Lave bem a batata com casca e faça alguns furos com um garfo em toda a superfície. Coloque sobre um prato ou recipiente de vidro e leve ao microondas por 8 minutos. Vire e cozinhe por mais 8 minutos. Espete um palito de dente dos dois lados e se ainda não estiver macia, adicione alguns minutos. Retire e enrole em papel alumínio para não esfriar. Faça um corte em uma das laterais e pressione com cuidado as duas pontas para que ela se abra. Agora é hora de rechear com o requeijão e o parmesão.",
    link_imagem:
      "http://www.saga.co.uk/magazine/media/saga/publishing/verticals/food/cooking-tips/potatoes/diana-henrys-perfect-baked-potato-tips-192776024-1280.jpg",
  },

  {
    receita: "Ovos em nuvens",
    ingredientes:
      "2 ovos, 1/4 copo de queijo minas meia cura ralado (mas pode trocar para parmesão, mas diminua um pouco a quantidade), 1/4 copo de salame picado(mas pode trocar para bacon já frito até ficar crocante)",
    ingredientesBase: {
      0: "4",
      1: "Ovo",
      2: "Queijo",
      3: "Salame",
      4: "Bacon",
    },
    modoPreparo:
      "Ligue o forno em 230 graus. Separa as claras das gemas, mas guarda as gemas intactas. Eu guardei na própria casca. Bate as claras até ficar neve bem firme. Pique salami e cebola e rala o queijo e misture levemente com as claras em neve, junto com uma pitadinha de sal. Faz dois nuvens da mistura em cima de uma forma para forno e faz um buraquinho no meio de cada. Leva ao forno por mais ou menos 4 minutos. Tira e adicione as gemas nos buraquinhos. Espalhe um pouquinho de pimenta do reino e sal em cima. Retorna para o forno por mais 3 minutos, ou até as gemas se estabilizem, mas sem ficarem duros. Pronto!",
    link_imagem:
      "http://1.bp.blogspot.com/-6npMz3pTa4M/T3ISyNopJKI/AAAAAAAABBM/oZ4CC6C1oQ8/s1600/ovos+2.JPG",
  },

  {
    receita: "Smoothie",
    ingredientes: "abacate, amora, leite de coco",
    ingredientesBase: {
      0: "3",
      1: "Abacate",
      2: "Amora",
      3: "Leite de coco",
    },
    modoPreparo:
      "Coloque suas frutas congeladas de preferência no liquidificador. Adiciona um pouco de liquido e bate. Começa com pouco a adicione mais se for necessário. Para não precisar adicionar muito liquido e perder a textura de sorvete, para de bater frequentemente e mistura com uma colher de pao para ajudar antes de voltar bater de novo. Experimenta e adicione adoçante se achar necessário. Serve já já! Se sobrar você pode colocar a mistura em moldes para picolé e guardar para um outro dia com calor",
    link_imagem:
      "http://www.dicasdemulher.com.br/wp-content/uploads/2014/05/10-smoothies-mais-saudaveis-de-todos-os-tempos.jpg",
  },

  {
    receita: "Omelete de claras com peito de peru",
    ingredientes:
      "4 claras de ovos, meia xicará (chá) de  peito de peru ralado grosso, 1 colher(sopa) margarina",
    ingredientesBase: {
      0: "3",
      1: "Ovo",
      2: "Peito de Peru",
      3: "Margarina",
    },
    modoPreparo:
      "Coloque as claras em uma tigela e bata ligeiramente com um batedor de arame ou garfo. Aqueça a margarina em uma frigideira antiaderente (com cerca de 21 cm de diâmetro) e despeje o peito de peru. Deixe secar um pouco e, de vez em quando, movimente a frigideira enquanto a omelete adquire consistência. Com o auxílio de uma espátula, dobre a omelete ao meio e sirva em seguida.",
    link_imagem:
      "http://origin.qualysadia.com.br/sites/default/files/imagecache/img_dicas/geral/img/_15min_0012_omelete_claras_peito_peru_2.jpg",
  },

  {
    receita: "Sorvete de Banana",
    ingredientes: "1 ou mais banana",
    ingredientesBase: {
      0: "1",
      1: "Banana",
    },
    modoPreparo:
      "Descasque as bananas e pique-as em rodelas. Depois coloque-as num prato e leve-as ao ao refrigerador por um tempo de pelo menos 2 horas. Depois coloque as bananas num processador de alimentos. Ligue a máquina e processe a banana até que ela tenha a consistência de um creme suave, que nem sorvete mole. Isso vais demorar um tempinho, e no começo vai parecer que não funciona, mas deixe que a máquina faça seu trabalho e logo você terá um delicioso sorvete de banana. Uma vez que seu sorvete de um único ingrediente estiver pronto, leve-o ao refrigerador até que fique bem firme depois poderá comer à vontade.",
    link_imagem:
      "http://www.camomilanutricao.com.br/wp-content/uploads/2011/08/sorvete-de-banana3.jpg",
  },

  {
    receita: "Torta de nutella",
    ingredientes: "4 ovos, 240 g de nutella",
    ingredientesBase: {
      0: "2",
      1: "Ovo",
      2: "Nutella",
    },
    modoPreparo:
      "Bata os ovos inteiros por cerca de 6 minutos até que eles tripliquem de tamanho. Depois, coloque a Nutella em um recipiente de vidro e leve ao micro-ondas por aproximadamente 20 segundos para deixar a consistência mais fluida. Então, acrescente ⅓ da nutella aos ovos batidos misturando bem, e vá fazendo o mesmo com as duas outras partes até que todo o chocolate seja incorporado. Despeje a mistura em uma forma redonda forrada com papel manteiga untado, e coloque para assar em forno pré-aquecido a 175 graus por 20 ou 25 minutos (ou verifique com um palito se a torta já está assada). Só desenforme depois de completamente fria.",
    link_imagem:
      "http://s2.glbimg.com/z_YI9zZlGz-danN4Orluslk8zKQ=/smart/e.glbimg.com/og/ed/f/original/2014/03/18/nutella_2.jpg",
  },

  {
    receita: "Chocolate quente",
    ingredientes: "240 ml de leite, 2 colheres de sopa de Nutella",
    ingredientesBase: {
      0: "2",
      1: "Leite",
      2: "Nutella",
    },
    modoPreparo:
      "Coloque 1/4 do leite em uma panela e adicione as 2 colheres de Nutella (se você quiser, pode acrescentar mais!) e leve ao fogo médio-baixo. Incorpore o chocolate até que ele forme uma mistura homogênea e, então, adicione o restante do leite aos poucos, mexendo sem parar. Quando estiver bem quente, retire do fogo, coloque em uma xícara e veja se você consegue encontrar marshmallows, canela ou quem sabe chantilly para incrementar. ",
    link_imagem:
      "http://emmafiorezi.com.br/blog/wp-content/uploads/2015/06/chocolate.jpg",
  },

  {
    receita: "Macaroon cookies",
    ingredientes: "500 g de coco ralado, 1 lata de leite condensado",
    ingredientesBase: {
      0: "2",
      1: "Coco ralado",
      2: "Leite condesado",
    },
    modoPreparo:
      "Basta misturar o coco ralado com o leite condensado e colocar bolinhas com a ajuda de uma colher em uma forma forrada com papel manteiga. Depois, leve para assar em um forno pré-aquecido a 180 graus por 10 ou 12 minutos ou até que as bolinhas fiquem levemente douradas.",
    link_imagem: "https://wineandplum.files.wordpress.com/2013/04/img_1121.jpg",
  },

  {
    receita: "Muffins",
    ingredientes:
      "4 ovos inteiros, 1 xícara de brócolis, meia xícara de queijo ralado",
    ingredientesBase: {
      0: "3",
      1: "Ovo",
      2: "Brocolis",
      3: "Queijo",
    },
    modoPreparo:
      "Pré-aqueça o forno a 190°. Em uma vasilha misture 4 ovos inteiros, 1 xícara de brócolis (só as flores picadas) e 1/2 xícara de queijo cheddar ralado ou outro queijo de sua preferência. Leve ao forno de 12 a 15 minutos, até que o ovo esteja assado.",
    link_imagem:
      "http://www.vilamulher.com.br/imagens/default/2014/01/14/muffins-de-brocolis-com-cheddar-6-75-1467.jpg",
  },
];

let gerar = document.getElementById("gerar");
let main = document.getElementById("main");
let title = document.getElementById("receita");
let ingredientes = document.getElementById("ingredientes");
let ingredientesBase = document.getElementById("ingredientesBase");
let preparo = document.getElementById("modoPreparo");
let image = document.getElementById("image");
let close = document.getElementById("close");

gerar.addEventListener("click", () => {
  main.style.display = "grid";
  main.style.animationName = "boxIn";
  main.style.animationDuration = "150ms";

  handleRecipe();

});
close.addEventListener("click", () => {
  main.style.animationName = "boxOut";
  main.style.animationDuration = "150ms";
  setTimeout(() => main.style.display = "none", 100);

});

function handleRecipe() {
    let id = Math.floor(Math.random() * recipes.length + 1);
    title.innerText = recipes[id].receita;
    ingredientes.innerText = recipes[id].ingredientes;
    preparo.innerText = recipes[id].modoPreparo;
    image.src = recipes[id].link_imagem;
}
