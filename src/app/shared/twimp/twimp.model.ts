import { Author } from '../author/author.model';

export class Twimp {
  private _id: number;
  private _url: string;
  private _author: Author;
  private _content: string;
  private _cost: number;
  private _timestamp: Date;
  private _favorite: boolean;

  constructor(
    id: number,
    url: string,
    author: Author,
    content: string,
    cost: number,
    timestamp: Date
  ) {
    this._id = id;
    this._url = url;
    this._author = author;
    this._content = content;
    this._cost = cost;
    this._timestamp = timestamp;
    this._favorite = false;
  }

  set id(id: number) {
    this._id = id;
  }
  get id(): number {
    return this._id;
  }

  public get url(): string {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;
  }

  public get author(): Author {
    return this._author;
  }
  public set author(value: Author) {
    this._author = value;
  }

  public get content(): string {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
  }

  public get cost(): number {
    return this._cost;
  }
  public set cost(value: number) {
    this._cost = value;
  }

  public get timestamp(): Date {
    return this._timestamp;
  }
  public set timestamp(value: Date) {
    this._timestamp = value;
  }

  public get favorite(): boolean {
    return this._favorite;
  }
  public set favorite(value: boolean) {
    this._favorite = value;
  }
}
