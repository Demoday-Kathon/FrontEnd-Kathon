# <span style="color: blue;">Kathon: Conectando Jovens ao Mercado de Trabalho</span>

O Kathon é uma plataforma inovadora que conecta hackathons a jovens, com foco em estudantes e ex-alunos de escolas públicas, permitindo que adquiram experiência prática e desenvolvam habilidades essenciais para o mercado de trabalho. Ao trabalhar em desafios reais apresentados por empresas, os participantes não só ampliam suas competências técnicas e interpessoais, mas também suas redes de contato e oportunidades de empregabilidade. Para as empresas, o Kathon oferece acesso a novos talentos e soluções criativas, promovendo uma conexão valiosa entre educação e mercado.

# Trilha do Usuário

## Descoberta e Registro

- **Funcionalidade**: Página inicial com explicação clara da proposta da plataforma e de seus benefícios.
- **Funcionalidade**: Opção de login/cadastro com redes sociais ou e-mail.
  
## Onboarding

- **Funcionalidade**: Tutorial interativo para explicar como a plataforma funciona. (Gameficado)
- **Funcionalidade**: Personalização do perfil (com habilidades no geral, preferências de hackathons). (Pontos para completar cadastro)

## Exploração dos Hackathons

- **Funcionalidade**: Painel de hackathons disponíveis, com filtros por área de interesse, nível de dificuldade, prêmios, empresas e participação individual ou em grupo.
- **Funcionalidade**: Página detalhada para cada hackathon, com a descrição do problema, requisitos, datas, prêmios e critérios de avaliação.

## Preparação e Inscrição

- **Funcionalidade**: Ferramenta de inscrição simples e intuitiva.
- **Funcionalidade**: Opção de envio de mensagens entre os membros do grupo.
- **Funcionalidade**: Espaço de chat entre mentores e participantes para tirar dúvidas antes do início.

## Participação no Hackathon

- **Funcionalidade**: Repositório de materiais e dados fornecidos pelas empresas para o desafio.
- **Funcionalidade**: Sistema de acompanhamento do progresso (Linha de tempo do hackathon, notificações de etapas importantes).

## Avaliação e Feedback

- **Funcionalidade**: Sistema de submissão de projetos/protótipos.
- **Funcionalidade**: Avaliação feita por representantes das empresas e especialistas.
- **Funcionalidade**: Feedback de aprovação ou não aprovação.

## Premiação e Oportunidades

- **Funcionalidade**: Anúncio dos vencedores, com transparência no processo de avaliação.
- **Funcionalidade**: Integração para entrega dos prêmios (dinheiro, kits etc.). (Implementação futura)

## Engajamento Contínuo

- **Funcionalidade**: Histórico de hackathons participados e premiações conquistadas.
- **Funcionalidade**: Notificações sobre novos hackathons.
- **Funcionalidade**: Sistema de gamificação (pontos, badges, ranking).

## Funcionalidades Extras

- **Comunidade de aprendizado**: Espaço onde os jovens podem compartilhar conhecimento, colaborar e aprender antes e depois dos hackathons.
- **Parcerias com empresas de ensino**: Integração com cursos ou certificações para preparar os jovens para desafios futuros.

Essa trilha foca em criar uma experiência fluida e atraente para os jovens, ao mesmo tempo que facilita a participação das empresas na organização dos hackathons.

---

# Parte técnica

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300000f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

# Descoberta e Registro

### Frontend:
- **React.js** ou **Vue.js**: Para construir uma interface interativa e moderna.
- **Tailwind CSS** ou **Material UI**: Frameworks de design para criar layouts responsivos e elegantes.

### Backend:
- **Node.js** com **Express.js** ou **Django** (Python): Para lidar com o gerenciamento de usuários e autenticação.

### Autenticação:
- **Auth0**, **Firebase Authentication**, ou **OAuth**: Para integração de autenticação com redes sociais (Google, Facebook, LinkedIn).

---

# Onboarding

### Frontend:
- **React.js** ou **Vue.js**: Para criar o fluxo de onboarding interativo.
- **Typeform** ou **Jotform**: Para implementar formulários e questionários personalizados no início do onboarding.

### Backend:
- **MongoDB** ou **PostgreSQL**: Para armazenar os perfis dos usuários e suas preferências de hackathons.

---

# Exploração dos Hackathons

### Frontend:
- **React.js** com **Redux** (ou **Vuex** no caso de Vue.js): Para gerenciar o estado global e exibir hackathons com filtros.
- **Algolia** ou **ElasticSearch**: Ferramentas de busca rápida para os filtros e pesquisa de hackathons.

### Backend:
- **GraphQL**: Para consultar dados de hackathons de maneira eficiente.
- **PostgreSQL** ou **MySQL**: Para armazenar as informações dos hackathons.
- **APIs de Calendário**: Para integrar datas dos hackathons no calendário dos usuários.

---

# Preparação e Inscrição

### Frontend:
- **Drag-and-drop Form Builders** (ex. **Formik**): Para um formulário dinâmico de inscrição.
- **Real-time chat**: Usar **Socket.IO** ou **Firebase Realtime Database** para implementar mensagens entre grupos ou com organizadores.

### Backend:
- **Firebase** ou **Socket.IO** (via **Node.js**): Para o sistema de mensagens em tempo real.
- **AWS S3** ou **Google Cloud Storage**: Para armazenamento de portfólios, projetos e arquivos enviados pelos participantes.

---

# Participação no Hackathon

### Ambiente colaborativo:
- **GitHub API** ou **GitLab API**: Para integração de controle de versão e colaboração entre equipes.
- **Figma API** ou **InVision API**: Para prototipagem colaborativa.

### Colaboração em tempo real:
- **Socket.IO** ou **Pusher**: Para permitir colaboração e atualizações em tempo real no ambiente de hackathon.
- **Jitsi** ou **Zoom API**: Para integrar chamadas de vídeo em grupo.

---

# Avaliação e Feedback

### Submissão de projetos:
- **Google Cloud Storage** ou **AWS S3**: Para o armazenamento seguro dos projetos/protótipos.
- **Dropbox API** ou **Google Drive API**: Para submissão de grandes arquivos.

### Feedback e Avaliação:
- **GraphQL** ou **REST API**: Para entregar avaliações e feedback de maneira eficiente.
- **Sistema de votação**: **React** ou **Vue.js** junto com **Firebase** ou **MongoDB** para gerenciar votos e avaliações dos jurados.
- **Notificações Push**: Usar **Firebase Cloud Messaging (FCM)** para enviar notificações de feedback e resultados.

---

# Premiação e Oportunidades

### Anúncio de vencedores:
- **Email Integration**: **SendGrid** ou **Mailchimp API** para enviar notificações por email aos vencedores.
- **Push Notifications**: **Firebase Cloud Messaging (FCM)** para avisos rápidos de premiação.

### Recrutamento e Contratação:
- **LinkedIn API**: Para conectar perfis profissionais e facilitar recrutamento por parte das empresas.
- **Sistema de agendamento de entrevistas**: **Calendly API** ou **Google Calendar API**.

---

# Engajamento Contínuo

### Gamificação:
- **Firebase Firestore** ou **MongoDB** para armazenar pontuações e níveis.
- **React.js** com **D3.js** ou **Chart.js** para visualização de ranking e badges.

### Histórico de hackathons:
- **PostgreSQL** ou **MongoDB**: Para armazenar dados de hackathons participados e prêmios.
- **ElasticSearch**: Para otimizar buscas no histórico.

---

# Funcionalidades Extras

### Comunidade de aprendizado:
- **Discourse** ou **NodeBB**: Para criar fóruns de discussão e troca de conhecimentos.
- **Slack API** ou **Discord API**: Para integrar comunidades de aprendizado com canais temáticos.

### Integração com Cursos e Certificações:
- **Udemy API**, **Coursera API** ou **LinkedIn Learning API**: Para sugerir cursos que complementam os hackathons.
- **Badgr** ou **Credly**: Para emissão de certificados digitais.

### API para ferramentas externas:
- **REST APIs** ou **GraphQL**: Para integração com ferramentas externas como GitHub, Figma, Slack, etc.
- **OAuth 2.0**: Para autenticar e integrar serviços externos com segurança.

---

# Infraestrutura e DevOps

- **AWS** ou **Google Cloud Platform (GCP)**: Para hospedagem e escalabilidade.
- **Docker** e **Kubernetes**: Para gerenciar containers e garantir que a plataforma seja escalável.
- **CI/CD** com **Jenkins** ou **GitHub Actions**: Para integração contínua e deploy automatizado.

---

Essas ferramentas e tecnologias permitirão criar uma plataforma completa, segura e escalável, com uma experiência de usuário fluida e um backend eficiente para lidar com as demandas dos hackathons e suas funcionalidades.
