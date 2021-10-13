export class Produto{
  //criar constructor com os tipos
  constructor(
   public id?: number,
   public nome?: string,
   public codBarras?:string,
   public quantidade?:string,
   public preco?:string,
   public concluida?:boolean,
  ) {
  }
}
