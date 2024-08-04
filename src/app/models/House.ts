export class House {
  private _price: number;

  constructor(
    private _houseName: string,
    private _sizeInSquareMeter: number,
    private _rooms: number,
    private _bathrooms: number
  ) {
    this._price = Number((_sizeInSquareMeter / _rooms * _bathrooms).toFixed(2));
  }

  public get houseName() : string {
    return this._houseName;
  }

  public get sizeInSquareMeter() : number {
    return this._sizeInSquareMeter;
  }

  public get rooms() : number {
    return this._rooms;
  }

  public get bathrooms() : number {
    return this._bathrooms;
  }

  public get price() : number {
    return this._price;
  }
}
