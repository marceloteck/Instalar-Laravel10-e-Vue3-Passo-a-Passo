@php
 echo   HtmlHelper::htmlResources([
        HtmlHelper::mix_version('https://sb-ui-kit-pro.startbootstrap.com/css/styles.css'),
        HtmlHelper::mix_version('https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css'),
        HtmlHelper::mix_version('https://cdn.jsdelivr.net/npm/sweetalert2@11.7.18/dist/sweetalert2.min.css'),
        HtmlHelper::mix_version('/vendor/assets/css/styles.css'),
]);
@endphp