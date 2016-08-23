var musicAlbumApp = angular.module('musicAlbum', []);

musicAlbumApp.controller('AlbumController', function ($scope){
    $scope.album = [
        {
            'artist': 'Aerosmith',
            'music': 'Amazing'
        },
        {
            'artist': 'Aerosmith',
            'music': 'What it takes'
        },
        {
            'artist': 'Bon Jovi',
            'music': 'Living on a prayer'
        },
        {
            'artist': 'Buckethead',
            'music': 'Jordan'
        },
        {
            'artist': 'Heroes del silencio',
            'music': 'Avalancha'
        },
    ];
});
