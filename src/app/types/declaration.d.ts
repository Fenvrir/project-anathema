// Объявляем тип для [name].module.scss файлов.
declare module "*.scss" {
    interface IClassNames {
      [className: string]: string;
    }
    const classnames: IClassNames;
    export = classnames;
  }