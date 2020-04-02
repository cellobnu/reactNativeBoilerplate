# reactNativeBoilerplate
Boilerplate em React Native, React Navigation v5.0, Redux

# Baixando o projeto
```
git clone https://github.com/cellobnu/reactNativeBoilerplate.git < NOME_PROJETO >
```


## Requisitos Básicos
- Renomeador de projetos

  ### será instalado globalmente no seu ambiente

  ```
  cd
  yarn global add react-native-rename
  ```


- Cocoapods 
  ### verificar está instalado (No seu terminal)
  ```
  pod --version
  ```

  ```1.9.0```

  ### INSTALANDO O COCOAPODS

    #### O CocoaPods gerência dependências da biblioteca para seus projetos do Xcode.

    https://guides.cocoapods.org/using/getting-started.html

  ```
  sudo gem install cocoapods
  ```


- Xcode

  ### É necessário a instalação do Xcode https://developer.apple.com/xcode/

  No XCODE configurar as ferramentas de linha de comando (Command Line Tools):

  Abra o Xcode e escolha "Preferências ..."

  Na Aba 'Localização' ('Locations')

  Selecionando a versão mais recente no menu suspenso Ferramentas de linha de comando (Command Line Tools).

  - Ex.: Xcode 11.4(11E146) 

  Instalando um simulador iOS no Xcode Para instalar um simulador, abra:

  Xcode> Preferências ... e selecione a guia Componentes . 

  Selecione um simulador com a versão correspondente do iOS que você deseja usar.


- Android Studio

  https://developer.android.com/studio


# Atualizando os arquivos
```
cd < NOME_PROJETO >
``` 

### Atualizando as dependências do projeto
```
yarn
``` 
### Alterando o nome do seu projeto
```
react-native-rename < NOME_PROJETO >
```
### limpando os caches
````
watchman watch-del-all
yarn cache clean
````

### Entre na pasta do 'ios' e atualize as dependências do iOS para esse projeto
```
cd ios
pod install
```

# Gerando o Build iOS
### Volte para a raiz do projeto

```
yarn ios
```

# Gerando o Build Android
### Volte para a raiz do projeto
```
yarn android
``` 