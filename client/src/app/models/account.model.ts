import {DisciplineModel} from "./discipline.model";
import {AcademicPlanModel} from "./academic-plan.model";

export class AccountModel {

  id: number;

  login: string;

  password: string;

  disciplines: DisciplineModel[];

  academicPlans: AcademicPlanModel[];

}
