export class Project {
    projectId: number;
    projectName: string;
    shortName: string;
    createdDate: Date;

    constructor() {
        this.projectId = 0;
        this.projectName = "";
        this.shortName = "";
        this.createdDate = new Date();
    }
  }