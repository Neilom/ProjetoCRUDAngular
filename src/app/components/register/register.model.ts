
//Interface criada para padronizar qual vai ser os dados enviados para registro
export interface Pessoa {
  id?: string,
  name: string;
  sex: string;
  birth_date: string;
  civil_state: string;
}
