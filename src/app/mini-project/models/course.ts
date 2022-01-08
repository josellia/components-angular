export interface EspecifCurse {
  id?: number;
  name: string;
  imageUrl: string;
  description: string;
  curseId: number;
}

export interface Course {
  id?: number;
  title: string;
  especifCurse: EspecifCurse[];
}
