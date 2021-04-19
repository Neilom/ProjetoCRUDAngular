
//Interface criada para padronizar qual vai ser os dados enviados para registro
export interface Register {
  id?: string,
  name: string,
  sexo: string,
  data_nascimento: string,
  estado_civil: string,
  CEP: string,
  andress: string,
  number: number,
  complement: string,
  state: string,
  city: string
}
