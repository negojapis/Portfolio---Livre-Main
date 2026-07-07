# Márcia | Especialista em Estética Avançada

Portfólio digital e landing page premium desenvolvida para apresentar os tratamentos e a jornada de beleza proporcionados pela especialista Márcia. O projeto foi construído com foco absoluto em **Experiência do Usuário (UX)** e **Design de Alto Padrão (Premium)**, distanciando-se de sites genéricos para criar uma verdadeira vitrine imersiva.

## Proposta e Diferenciais do Projeto

O site não é apenas informativo; ele transmite autoridade, exclusividade e beleza desde os primeiros segundos de navegação.

- **Design Estilo "Revista" (Editorial)**: Uso de sobreposição de tipografias (fontes cursivas elegantes como *Great Vibes* sobrepostas a fontes clássicas serifadas) que entregam um aspecto luxuoso e sofisticado.
- **Imersão Visual**: A seção Hero apresenta uma imagem de fundo em tela cheia que se ajusta automaticamente, criando um impacto visual de "capa de revista".
- **Micro-interações de Alto Nível**: 
  - **Cursor Personalizado**: O ponteiro padrão do sistema foi substituído por uma bolinha e um anel externo fluido que responde a cliques e pairar (hover) em botões e links, dando uma sensação "tátil" e de aplicativo moderno.
  - **Efeito Glow (Brilho Dinâmico)**: Os cards de tratamento possuem um efeito inteligente que rastreia a posição do mouse e ilumina a borda interna do card, transmitindo inovação e tecnologia.
- **Marquee Contínuo (Esteira de Destaques)**: Uma barra horizontal com animação infinita exibindo palavras-chave (*Skincare*, *Glow*, *Beleza*, *Estética*) separadas pela logo da especialista, trazendo dinamismo ininterrupto.
- **Animações de Scroll (Fade Up)**: O conteúdo não é carregado de uma vez. À medida que o usuário rola a página, elementos surgem flutuando suavemente de baixo para cima, o que cria um ritmo de leitura guiado e muito agradável.
- **Responsividade Impecável**: Adaptação perfeita de todos os elementos para qualquer tela, com menus e layouts que não perdem a proporção e a elegância no celular.

## Tecnologias Utilizadas

Para garantir **leveza e altíssima performance**, o projeto foi desenvolvido sem a dependência de frameworks ou bibliotecas pesadas para a interface, garantindo carregamento instantâneo e fluidez.

- **HTML5**: Estruturação limpa e semântica de seções.
- **CSS3 (Vanilla)**: Toda a inteligência visual, variáveis de cor, responsividade (Media Queries), animações de fade e keyframes (para a esteira contínua) criadas do zero utilizando CSS moderno.
- **JavaScript (Vanilla JS)**: Responsável pela lógica das micro-interações:
  - Funcionamento do menu mobile (hambúrguer).
  - Cálculo matemático (eixos X e Y) para o efeito de Glow nos cards baseado na posição exata do mouse.
  - Lógica de renderização do Cursor Personalizado e suas reações.
  - `IntersectionObserver` para disparar as animações *Fade-Up* apenas quando os elementos entram no campo de visão.
- **Vite**: Ferramenta de build e execução de desenvolvimento super rápida.
- **Google Fonts**: Combinação selecionada de fontes premium (*Inter*, *Space Grotesk*, *Playfair Display*, *Cinzel* e *Great Vibes*).
- **Font Awesome**: Conjunto de ícones vetoriais.

## Estrutura do Site

1. **Home (Hero)**: Tela inicial imersiva com tipografia impactante, fundo de tela cheia e menu fixo transparente.
2. **Highlights Bar (Esteira)**: Destaque rotativo contínuo com a identidade visual da profissional.
3. **Tratamentos**: Grid estilizado contendo cards modernos com as especialidades estéticas.
4. **Jornada (Processo)**: Uma linha do tempo vertical detalhando o método exclusivo de atendimento, da avaliação ao acompanhamento.
5. **Sobre**: História e manifesto da especialista, construído com tipografia editorial.
6. **Contato**: Rodapé completo focado em conversão, com mapa do site e chamadas para o WhatsApp.
