var app = new Vue({
  el: '#app',
  data:{
      tipo:0,
      saldo:1000000,
      Valor:0,
      edo:0,
      clave:"1234",
      pin:""
    },
    methods: {
      Procesar:function(){
        if(this.tipo=="C"){
          this.Consignar();
        }else{
          this.Retirar();
        }
      },
      Consignar: function(){
        this.saldo= this.saldo + this.Valor
      },
      Retirar:function(){
        if(this.Valor>this.saldo){
          alert("!Fondos insuficientes¡")
        }else{
          this.saldo= this.saldo - this.Valor;
        }
      },
      validar:function(){
        if(this.pin==this.clave){
          this.edo=1;
        }else{
          alert("Su clave es incorrecta");
          this.edo=0;
        }
      }
    },
  })