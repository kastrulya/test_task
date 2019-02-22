<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Closers</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Montserrat:100,300,400,500,600" rel="stylesheet">

    </head>
    <body>
        <div id="app">
            <layout></layout>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
