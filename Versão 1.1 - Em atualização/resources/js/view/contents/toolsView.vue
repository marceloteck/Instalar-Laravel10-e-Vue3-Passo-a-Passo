<template>
    <section class="bg-light py-5">
        <div class="container-fluid px-5">
         <div class="row gx-5">
          <!-- CONTEUDO -->

       <div class="content">
      <div class="container-fluid">
        <navtools /> <br><br>

        <div class="row" style="margin-top: 15px;">
           
          <!-- /.col-md-6 -->
          <div class="col-lg-12">

            <div class="card card-primary card-outline">
              <div class="card-header">
                <h5 class="card-title m-0">Ferramenta de Escritório</h5>
              </div>
              <div class="card-body">
                <select class="form-select" aria-label="Default select example" v-model="selectedOption">
                <option selected value="cpf">Retirar Pontos e traços de CPF</option>
                <option value="txtMaiusculo">Texto em Maiúsculo</option>
                <option value="txtMinusculo">Texto em Minúsculo</option>
              </select>
              <br>
              <textarea style="height:150px" class="form-control" @change="textArea" v-model="atributes.textArea" id="textArea" :placeholder="placeholderText"></textarea>
                <br>



                <button @click="copiarTexto" class="btn btn-primary">Copiar</button>
              </div>
            </div>
          </div>

<!--
          <div class="col-lg-6">

            <div class="card card-primary card-outline">
              <div class="card-header">
                <h5 class="card-title m-0">Texto em maiúsculo</h5>
              </div>
              <div class="card-body">
                <textarea class="form-control" onkeydown="maiusculo('textM')" id="textM" placeholder="colocar todo o texto em MAIÚSCULO" data-listener-added_807f5ba9="true"></textarea>
                
                <br>

                <a href="#" onclick="copiarTexto('textM')"  class="btn btn-primary">Copiar Texto</a>
              </div>
            </div>
          </div>
        -->

          <div class="col-lg-12" style="margin-top:25px">
            <div class="card card-info card-outline">
            <div class="card-header">
                <h5 class="card-title m-0">Google Maps</h5>
            </div>
            <div class="card-body">
            <form>
            <input class="oculto form-control"  placeholder="Anotações: coloque os numeros aqui somente para conferencia e poder digitar as coordenadas">
            <br>
            <table>
                <tr>
                <td><span>Lat:</span></td>
                <td>
                    <input id="lat1" class="input" type="text" placeholder="latitude">
                    <input id="lat2" class="input" type="text" placeholder="latitude">
                    <input id="lat3" class="input" type="text" placeholder="latitude">
                </td>
                <td></td>
                <td></td>
                </tr>  
                <tr>
                <td><span>Long:</span></td>
                <td>
                    <input id="long1" class="input" type="text" placeholder="Longitude">
                    <input id="long2" class="input" type="text" placeholder="Longitude">
                    <input id="long3" class="input" type="text" placeholder="Longitude">
                </td>
                <td rowspan="2">
                    <button type="button" class="btn btn-secondary"  onclick="maps()" id="" >ok</button>
                </td>
                </tr>
            </table>
            
            <br>

            <textarea onfocus="maps()" class="form-control"   id="Mps" placeholder="coordenadas"></textarea>
            <br>
            <button class="btn btn-danger" type="reset" >Limpar</button>
            <br><br>

            </form>
                <a href="#" onclick="mapsLink()"  class="btn btn-primary">Abrir no google MAPS</a>
            </div>
            </div>
            </div>

        <!-- END CONTEUDO -->
          <!-- /.col-md-6 -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>


            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';

// Crie um estado reativo para armazenar a opção selecionada
const selectedOption = ref('cpf');
// Crie um estado reativo para armazenar o texto do placeholder
const placeholderText = ref('Insira o CPF');

const atributes = reactive({  textArea: '' });

// Assista a mudanças na opção selecionada e atualize o texto do placeholder com base na seleção
watch(selectedOption, (newValue) => {
  if (newValue === 'cpf') {
    placeholderText.value = 'Insira o CPF';
  } else if (newValue === 'txtMaiusculo' || newValue === 'txtMinusculo') {
    placeholderText.value = 'Insira o seu texto';
  }
});

function textArea(){
var str = atributes.textArea;
var str2 = str.replace(/[^\d]+/g,'');
atributes.textArea = str2;
}


function copiarTexto(){
  alert(atributes.textArea);
/* Selecionamos por ID o nosso input */
  //var textoCopiado = ;
  /* Deixamos o texto selecionado (em azul)
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999); /* Para mobile 
  /* Copia o texto que está selecionado 
  document.execCommand("copy");
  atributes.textArea = "";  */
}
</script>










<style>
    .centerText{
        text-align: center;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: row;
    }
    .input {
        padding: 0.375rem 0.20rem;
        font-size: 1rem;
        font-weight: 400;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 5px;
    }
    .input:focus{
        outline: none;
        }

    .tools__container {
    background: #fff;
    border-left: 1px solid #f6f6f8;
    border-top: 1px solid #f6f6f8;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    position: relative;
    -webkit-box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
    }

    @media (max-width: 960px){
    .tools__item {
    -ms-flex: 0 0 33.333%;
    flex: 0 0 33.333%;
    }}
    @media (max-width: 1280px){
    .tools__item {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    }}
    @media (max-width: 1300px){
    .tools__item {
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    }}
    @media (max-width: 90em){
    .tools__item {
    font-size: 36px;
    line-height: 38px;
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    }}
    .tools__item {
    -ms-flex: 0 0 16.666%;
    flex: 0 0 16.666%;
    color: #383e45;
    border-right: 1px solid #f6f6f8;
    border-bottom: 1px solid #f6f6f8;
    position: relative;
    overflow: hidden;
    -webkit-transition: all .4s ease-out;
    -o-transition: all .4s ease-out;
    transition: all .4s ease-out;
    z-index: 1;
    }
    @media (max-width: 90em){
    .tools__item a {
    padding: 24px;
    }
    }

    .tools__item a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 32px;
    color: #383e45;
    position: relative;
    z-index: 2;
    }
    a, a:hover {
    text-decoration: none;
    }
    a {
    color: #e5322d;
    }
    a {
    background: rgba(0,0,0,0);
    }
    .tools__item__icon, .tools__item h3 {
    margin-bottom: 12px;
    }


    h3{
    font-size: 20px;
    }
    </style>