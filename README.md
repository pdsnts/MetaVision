# MetaVision

Site oficial do **Metavision**, o museu virtual 3D do **Maracannes**. O projeto nasceu da união entre a formação técnica do SENAI e a visão organizacional do SESI, com o objetivo de preservar, de forma interativa e imersiva, a história e as diferentes edições do evento.

> Repositório de uso exclusivo dos membros do MetaVision.

## Sobre o projeto

O Metavision reúne diferentes áreas de atuação: gestão, programação de jogos e web, design e modelagem 3D. O museu é inspirado na estrutura e na experiência de espaços culturais, como o Teatro Firjan.

Idealizadores: Wellington, Viceli e Vicente.

## O que tem no site

- Apresentação, história e o que é o Metavision
- Destaques do museu
- Contagem regressiva para o próximo Maracannes
- Participantes do projeto
- Instruções de acesso e o museu 3D jogável no navegador
- Menu fixo com rolagem suave e destaque da seção atual

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Unity (build WebGL do museu 3D)

## Estrutura de pastas

```
MetaVision/
├── index.html
├── css/
│   ├── global.css        # reset, variáveis de cores e fontes
│   └── home.css          # estilos das seções da página
├── js/
│   ├── countdown.js      # contagem regressiva do próximo Maracannes
│   └── main.js           # destaque do link do menu conforme a rolagem
├── img/
│   └── participantes/    # fotos dos participantes
└── jogo/                 # build WebGL exportado da Unity
```

## Como rodar

Não precisa instalar nada. Abra o `index.html` no navegador (de preferência Google Chrome ou Microsoft Edge).

Para testar o jogo, use um servidor local, porque builds WebGL costumam não funcionar abrindo o arquivo direto. Por exemplo, com a extensão **Live Server** do VS Code, ou:

```
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Como editar

### Data do próximo Maracannes

Em `js/countdown.js`, altere a linha `dataEvento` (ano, mês, dia, hora, minuto, segundo). Atenção: os meses começam em 0 (janeiro = 0, dezembro = 11).

```js
const dataEvento = new Date(2026, 9, 28, 12, 0, 0).getTime(); // 28/10/2026 às 12:00
```

Depois dessa data, o site mostra "Em breve, novas edições".

### Participantes

1. Coloque a foto da pessoa em `img/participantes/` (de preferência quadrada).
2. No `index.html`, na seção `#participantes`, copie um bloco `<figure class="team-member">`.
3. Troque o caminho da foto, o texto `alt` e o nome.

Inclua apenas quem realmente contribuiu com o projeto.

### Jogo (museu 3D)

1. Exporte o projeto da Unity como **WebGL**.
2. Coloque os arquivos gerados dentro da pasta `jogo/`. O arquivo principal precisa se chamar `index.html`.
3. O site carrega o jogo por meio de um `iframe` na seção "Como acessar o museu 3D?".

Se o jogo não funcionar bem hospedado junto com o site, publique no **itch.io** e troque o `src` do `iframe` e o link "Abrir no itch.io" no `index.html` pelo endereço da página do jogo.

## Equipe

A lista de participantes está na seção "Quem fez o Metavision" do site.

## Licença

Projeto desenvolvido por alunos do SENAI. Direitos reservados aos membros do MetaVision.
