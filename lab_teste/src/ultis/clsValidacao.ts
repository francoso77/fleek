export default class clsValidacao{
        
    public validaDado(dado: string | number): boolean{
        
          
        if(typeof(dado) === 'string' && dado != null && dado != undefined && dado != ''){
            return true
        } else if(typeof(dado) === 'number' && dado >0){
            return true
        } else{
            return false
        }
        
    }
}