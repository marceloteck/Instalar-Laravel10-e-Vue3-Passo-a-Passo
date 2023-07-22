<template>
    <section class="bg-light py-10">
        <div class="container-fluid px-5">
            <div class="row gx-5">
                <navprodutores />

                <table id="TblePendentes" class="table">
                <thead class="table-light">
                    <tr>
                    <th scope="col">Classe</th>
                    <th scope="col">Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                </tbody>
                </table>



            </div>
        </div>
    </section>
</template>

<script>
export default {
  mounted() {
    const dataTable = new window.simpleDatatables.DataTable("#TblePendentes", {
      searchable: true,
      fixedHeight: true,
    });
  },
};
</script>

