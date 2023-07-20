<!DOCTYPE html>
<html lang="pt-br">
<head>
    @include('componetsPage/metatags')
    @include('componetsPage/globalCss')
</head>
<body>
    <div id="app-root">
        <routerviewpage /> {{-- chamada da pagina routerview com a gif de carregamento com vue.js --}}
    </div>
    @include('componetsPage/globalJs')
</body>
</html>