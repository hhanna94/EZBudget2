export class UserToken {
  public userName: string;
  public token: string;
  public expirationDate: Date;

  constructor(userName: string, token: string, expirationDate?: Date) {
    this.userName = userName;
    this.token = token;
    this.expirationDate = expirationDate;
  }
}
