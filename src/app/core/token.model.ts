export class Token {
  private _key: string;
  private _idAuthor: string;

  constructor(key: string, idAuthor: string) {
    this._key = key;
    this._idAuthor = idAuthor;
  }

  public get key(): string {
    return this._key;
  }
  public set key(value: string) {
    this._key = value;
  }

  public get idAuthor(): string {
    return this._idAuthor;
  }
  public set idAuthor(value: string) {
    this._idAuthor = value;
  }
}
