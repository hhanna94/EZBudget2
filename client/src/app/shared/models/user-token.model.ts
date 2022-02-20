export class UserToken {
  public userName: string;
  public token: string;
  public expirationDate: Date;
  public id: number;

  constructor(id: number, userName: string, token: string, expirationDate?: Date) {
    this.userName = userName;
    this.token = token;
    this.expirationDate = expirationDate;
    this.id = id;
  }
}
