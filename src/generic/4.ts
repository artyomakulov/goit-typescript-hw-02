/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface PropsTitle {
  title: string;
}

class Component<T> {
  constructor (public props:T) {
  }
}

class Page extends Component<PropsTitle> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};