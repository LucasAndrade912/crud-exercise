export class House {
  private static ID_AUTOINCREMENT = 0;
  private _id: number;
  private _price: number;

  constructor(
    private _houseName: string,
    private _sizeInSquareMeter: number,
    private _rooms: number,
    private _bathrooms: number
  ) {
    House.ID_AUTOINCREMENT += 1;
    this._id = House.ID_AUTOINCREMENT;
    this._price = Number((_sizeInSquareMeter / _rooms * _bathrooms).toFixed(2));
  }

  public get id(): number {
    return this._id;
  }

  public set id(v: number) {
    this._id = v;
  }

  public get houseName(): string {
    return this._houseName;
  }

  public get sizeInSquareMeter(): number {
    return this._sizeInSquareMeter;
  }

  public get rooms(): number {
    return this._rooms;
  }

  public get bathrooms(): number {
    return this._bathrooms;
  }

  public get price(): number {
    return this._price;
  }
}
