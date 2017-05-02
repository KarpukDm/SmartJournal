export class DisciplineModel {

  id: number;

  name: string;

  disciplineTypes: DisciplineTypeModel[];

}

export class DisciplineTypeModel {

  id: number;

  name: string;

  currentCounter: number;

  hoursNumber: number;
}
