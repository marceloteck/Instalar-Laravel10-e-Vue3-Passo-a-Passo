@extends('html')
@section('metaTags')
    @include('componetsPage/metatags')
@endsection

@section('LinkCss')
    @include('componetsPage/linkCss')
@endsection

@section('body')
    <div id="app-root">
        <routerviewpage />
    </div>
@endsection

@section('LinkJs')
    @include('componetsPage/linkJs')
@endsection

