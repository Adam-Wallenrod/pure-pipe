export interface Dude {
  name: string;
  age: number;
  skills?: Skill;
}

interface Skill {
  charm?: boolean;
  look?: boolean;
  mojo?: boolean;
}
