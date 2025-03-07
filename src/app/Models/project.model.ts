export class ProjectModel {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  releaseDate: Date;
  thumbnailUrl: string;
  parallax: string;

  constructor(id: number, title: string, subtitle: string, description: string, releaseDate: Date, thumbnailUrl: string, parallax: string) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.releaseDate = releaseDate;
    this.thumbnailUrl = thumbnailUrl;
    this.parallax = parallax;
  }
}
