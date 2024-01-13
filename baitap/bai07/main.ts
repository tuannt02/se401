interface IDocumentCloneable {
  clone(): Office365Document;
}

abstract class Office365Document implements IDocumentCloneable {
  private fileName: string;
  private createdAt: Date;

  constructor(fileName: string, createdAt: Date) {
    this.fileName = fileName;
    this.createdAt = createdAt;
  }

  public getFileName(): string {
    return this.fileName;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public abstract clone(): Office365Document;
}

enum ContentType {
  WORD = "String",
  EXCEL = "String | Number | Date | Currency",
}

enum ContentFormat {
  BOLD = "BOLD",
  ITALIC = "ITALIC",
  UNDERLINE = "UNDERLINE",
}

interface DocumentContent {
  content: string | any;
  typeOfContent: ContentType;
  format: ContentFormat;
}

class WordDocument extends Office365Document {
  private sections: DocumentContent[] = [];

  constructor(fileName: string, sections: DocumentContent[]) {
    // File created at the moment of instantiation
    super(fileName, new Date());
    this.sections = sections;
  }

  public getContent(): DocumentContent[] {
    return this.sections;
  }

  public clone(): WordDocument {
    return new WordDocument(`Copy of ${this.getFileName()}`, this.getContent());
  }
}

class ExcelDocument extends Office365Document {
  private sections: DocumentContent[] = [];

  constructor(fileName: string, sections: DocumentContent[]) {
    // File created at the moment of instantiation
    super(fileName, new Date());
    this.sections = sections;
  }

  public getContent(): DocumentContent[] {
    return this.sections;
  }

  public clone(): ExcelDocument {
    return new ExcelDocument(
      `Copy of ${this.getFileName()}`,
      this.getContent()
    );
  }
}

// Client code
const wordDocument = new WordDocument("My CV", [
  {
    content: "Nguyen Van A",
    typeOfContent: ContentType.WORD,
    format: ContentFormat.BOLD,
  },
  {
    content: "Software Engineer",
    typeOfContent: ContentType.WORD,
    format: ContentFormat.BOLD,
  },
  {
    content: "Hanoi, Vietnam",
    typeOfContent: ContentType.WORD,
    format: ContentFormat.BOLD,
  },
]);

const excelDocument = new ExcelDocument("Salary table", [
  {
    content: "Nguyen Van A",
    typeOfContent: ContentType.WORD,
    format: ContentFormat.BOLD,
  },
  {
    content: 24,
    typeOfContent: ContentType.EXCEL,
    format: ContentFormat.BOLD,
  },
  {
    content: new Date(),
    typeOfContent: ContentType.EXCEL,
    format: ContentFormat.BOLD,
  },
]);

const clonedWordDocument = wordDocument.clone();
const clonedExcelDocument = excelDocument.clone();

console.log(clonedWordDocument);