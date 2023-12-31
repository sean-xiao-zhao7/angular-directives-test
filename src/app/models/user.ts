export class User {
  private name: string;
  private email: string;
  private password: string;
  private _idToken!: string;
  private _expireDatetime!: Date;

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

  get idToken(): string | boolean {
    if (!this._expireDatetime) {
      return false;
    }
    return this._idToken;
  }

  setIdToken(idToken: string, expiresIn: string): void {
    this._idToken = idToken;
    this._expireDatetime = new Date(new Date().getTime() + +expiresIn * 1000);
  }
}
