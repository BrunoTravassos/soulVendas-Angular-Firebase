export class Cliente{
  //criar constructor com os tipos
  constructor(
   public id?: number,
   public nome?: string,
   public cpf?:string,
   public email?:string,
   public telefone?:string,
   public concluida?:boolean,
  ) {

  }
}
