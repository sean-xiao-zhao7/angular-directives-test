export class Hobby {
  name: string;
  description: string;
  imageUrl: string;
  type: string;

  constructor(
    name: string,
    description: string,
    imageUrl: string,
    type: string
  ) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.type = type;
  }
}
