# passnfly-airports

VueJS application made with official [VueCLI](https://cli.vuejs.org/)

Vuex for store management

[Bootstrap 4.5](https://getbootstrap.com/docs/4.5/) used as CSS framework

[Sass](https://sass-lang.com/) for CSS Preprocessor

Timezones from: https://github.com/sanohin

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## Questions 

5. What causes memory leaks in Vue? How can they be solved?

- Create too much listeners and watchers for components that don't need to exist anymore. Reduce usage of watchers only when it's necessary

- Take care of lifecycle, don't forget to destroy listener before to remove an component from the DOM (destroy, beforeDestroy hooks).

- Use reactive data when necessary. 
Data who doesn't need to change don't have to be computed, but only a data or method called when needed in the component.

