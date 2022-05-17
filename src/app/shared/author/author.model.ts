export class Author {
  private _id: string;
  private _url: string;
  private _fullName: string;
  private _image: string;

  constructor(id: string, url: string, fullName: string, image: string) {
    this._id = id;
    this._url = url;
    this._fullName = fullName;
    this._image = image;
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  public get url(): string {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;
  }

  public get fullName(): string {
    return this._fullName;
  }
  public set fullName(value: string) {
    this._fullName = value;
  }

  public get image(): string {
    return this._image;
  }
  public set image(value: string) {
    this._image = value;
  }
}
