<template>
    <section class="bg-light py-10">
        <div class="container-fluid px-5">
            <div class="row gx-5">

                <div class="center-content">
                    <div class="file-upload">
                    <input type="file" name="file" id="file" />
                    <label for="file">Selecionar arquivo</label>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>



<style>
    .center-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    }

    .file-upload {
      min-width: 230px;
      width: 35vw ;
      text-align: center;
      position: relative;
      overflow: hidden;
      display: inline-block;
      cursor: pointer;
      background-color: #2196F3;
      color: #fff;
      padding: 40px 20px;
      border-radius: 5px;
      font-size: 18px;
      transition: background-color 0.3s ease;
    }

    .file-upload input[type="file"] {
      font-size: 100px;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      cursor: pointer;
    }

    .file-upload:hover {
      background-color: #0D47A1;
    }
  </style>