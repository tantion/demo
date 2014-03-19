
angular.module('cssApp')
.controller('FontController', function ($scope) {

    $scope.font = {
        family: 'inherit',
        familys: ['inherit', 'Serif', 'Sans-serif', 'Monospace', 'Cursive', '宋体', '微软雅黑'],
        weight: 'normal',
        weights: ['normal', 'bold', 'bolder', '100', '400', '500', '600', '900'],
        size: 'inherit',
        sizes: ['inherit', 'smaller', 'xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large', 'larger', '12px', '14px', '18px'],
        lineHeight: 1.5,
        'line-heights': [0.5, 1, 1.5, 2],
        style: 'normal',
        styles: ['normal', 'italic', 'oblique'],
        variant: 'normal',
        variants: ['normal', 'small-caps']
    };

});
