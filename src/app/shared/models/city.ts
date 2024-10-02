export class City {
  constructor(
    public id: number,
    public name: string,
    public province: string,
    public rating: number,
    public price?: number,
    public population?: number,
    public area?: number,
    public favorite?: boolean
  ) {}
}
