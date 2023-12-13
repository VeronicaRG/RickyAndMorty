# Ricky & Morty App

>Projeto feito como teste prático para empresa **_Datum_**.

![Alt text](/docs/assets/img/App.png)

### Buildar o Aplicativo

[Clique aqui para ver o tutorial](/docs/setup.md)

## 🛠️ Features

-   [X] Tela que exibe os personagens
-   [X] Tela que exibe os detalhes dos personagens
-   [X] Tela que exibe os episódio
-   [X] Favoritar personagem ou episódio
-   [X] Tela que exibe os seus favoritos


## ✨ Tecnologias

-   [X] React Native
-   [X] TypeScript
-   [X] Styled Components
-   [X] React Navigation 
-   [X] i18next
-   [X] GraphQL
-   [X] Redux

## ⚖️ Decisões do Projeto:

-   [X] Padrão MVVM de arquitetura para separar a parte visual das regras de negócio.
-   [X] Usar o reactotron como ferramenta de debugger para poder visualizar as requests e também o redux em tempo real.
-   [X] Usar o MMKV ao invés do Async Storage pelo ganho de performance ao salvar e ler arquivos (+ de 10x).
-   [X] Codegen do GraphQL para automatizar a tipagem.
-   [X] i18N para centralizar os textos e possibilitar a internacionalização.
-   [X] Redux para gerenciamento de estados pela integração com Reactotron e com o Redux Persist.
-   [X] FlashList pela renderização mais performática que a FlatList.
-   [X] Pegar imagens de uma segunda API (MovieDB) para melhorar a visualização da tela extra que decidi criar (Tela de Episódios).
-   [X] FastImage pelo carregamento mais rápido e cache de imagens no device.

## 🚀 Feature que pretendo implementar para deixar como portfolio

-   [ ] Teste unitário com Jest.
-   [ ] Teste E2E com Maestro.
-   [ ] Filtro na tela de personagens por espécie e nome utilizando formulário com react hook forms.
-   [ ] Adicionar as cores utilizadas no tema do styled components e passar a consumir do Tema em todo o app.
-   [ ] Tela de configurações para habilitar a troca do idioma do aplicativo.


## 🔖 Layout

[Clique aqui para ver as inspirações visuais do projeto](/docs/insights.md)