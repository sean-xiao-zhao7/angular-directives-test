export class User {
  private name: string;
  private email: string;
  private password: string;
  private _idToken!: string;
  private _expireDatetime!: string;

  constructor(name: string, email: string, password: string = '') {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  get idToken(): string {
    return this._idToken;
  }

  setIdToken(idToken: string, expireDatetime: string): void {
    this._idToken = idToken;
    this._expireDatetime = expireDatetime;
  }
}
