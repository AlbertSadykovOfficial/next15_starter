//  Tools
//  вместо const должен быть импорт, но чтобы ничего не сломалось и ничего не устанавливать объявлен const

const config = {
  url: "https://example.com/",
};

const countries = {
  getAlpha2Code: (name: string) => name.slice(0, 2),
};

type Logo = {
  _trackId: number;
  path: string;
};

/**
 * @class
 * @classdesc Представление примера в системе
 */
export default class Example {
  /**
   * @constructor
   * @param {Object} data Данные примера
   */
  constructor(
    public id: string,
    public name: string,
    public logo: Logo,
    public country: string,
    public created: string,
    public deleted: string,
    public isDeleted: string,
    public meta: object = {
      history: undefined,
    },
  ) {}

  /** @type {Object} ссылка на логотип */
  get logoLink(): string {
    return Example.getFullPathImageLinks(this.logo);
  }

  /** @type {String} код страны */
  get countryFlagCode(): string {
    if (!this.country) return "";
    const code = countries.getAlpha2Code(this.country);
    return code ? code.toLowerCase() : "";
  }

  //      PUBLIC METHODS
  /**
   * Получить копию данных для редактирования
   * @public
   * @returns {Object}
   */
  toEditableData(): object {
    const logoClone = this.logo;
    logoClone._trackId += Date.now() + Math.random();
    return {
      name: this.name,
      logo: logoClone,
      country: this.country,
    };
  }

  //      ABSTRACT
  /**
   * Пример абстрактного метода
   * @public
   * @abstract
   * @param {String|Object} image изображение
   * @returns {Object}
   */
  // eslint-disable-next-line
  abstractMethodExample(image: Logo): object {
    throw new Error("Требуется реализация абстрактного метода");
  }

  //      STATIC-PUBLIC
  /**
   * Получить полные ссылки на изображение
   * @public
   * @static
   * @param {String|Object} image изображение
   * @returns {Object}
   */
  static getFullPathImageLinks(image: Logo): string {
    return `${config.url}/media/example/${image.path}`;
  }
}
