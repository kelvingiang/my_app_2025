export class ClassScroll {
  private _id : number;
  private _title: string;
  private _content: string;

  constructor(
    id: number,
    title: string,
    content: string,
  
  ) {
    this._id = id;
    this._title = title;
    this._content = content;
  
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get content(): string {
    return this._content;
  }

  public set content(value: string) {
    this._content = value;
  }
 



}
