export class Hobby {
  name: string;
  description: string;
  imageUrl: string;
  type: string;
  social: string[];

  constructor(
    name: string,
    description: string,
    imageUrl: string,
    type: string,
    social: string[]
  ) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.type = type;
    this.social = social;
  }
}
