export class Funcionario{
  //criar constructor com os tipos
  constructor(
   public id?: number,
   public nome?: string,
   public cpf?:string,
   public email?:string,
   public salario?:string,
   public concluida?:boolean,
  ) {

  }
}
