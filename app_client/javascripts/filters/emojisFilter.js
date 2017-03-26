/**
 * Created by Carmen-Uni on 22/03/2017.
 */
angular.module('multichatApp')
    .filter("emojis", function($sce) {
        var space = / /g;
        var line = /\n/g;
        var laughing = /:D/g;
        var smile = /:\)/g;
        var wink = /;\)/g;
        var kiss = /:x/g;
        var kiss2 = /:\*/g;
        var tongueWink = /;-\)/g;
        var tongue = /:-P/g;
        var embarrassing = /:S/g;
        var sad = /:\(/g;
        var happy = /:o\)/g;
        var confused = /%\)/g;
        var crying = /:'\(/g;
        var happyCrying = /:'\)/g;
        var disgust = /D=%/g;
        var horror = /D:%/g;
        var angry = /:\[/g;
        var cool = /\|O\)/g;
        var car = /:-C/g;
        var city = /:-L/g;
        var koala = /:-K/g;
        var burguer = /F1/g;
        var chips = /F2/g;
        var cookies = /F3/g;
        var donuts = /F4/g;
        var watermelon = /F5/g;
        var sweet = /F6/g;
        var pizza = /F7/g;
        var lorry = /T2/g;
        var plane = /T3/g;
        var train = /T5/g;
        var statue = /T1/g;
        var whale = /T4/g;
        return function(input) {
            var output = input.replace(space, '&nbsp;');
            output = output.replace(line, '<br>');
            output = output.replace(laughing,
                '<img src="images/emojis/smiley-01.png" width="20px" height="20px">');
            output = output.replace(smile,
                '<img src="images/emojis/smiley-05.png" width="20px" height="20px">');
            output = output.replace(wink,
                '<img src="images/emojis/smiley-06.png" width="20px" height="20px">');
            output = output.replace(kiss,
                '<img src="images/emojis/smiley-07.png" width="20px" height="20px">');
            output = output.replace(kiss2,
                '<img src="images/emojis/smiley-08.png" width="20px" height="20px">');
            output = output.replace(tongueWink,
                '<img src="images/emojis/smiley-12.png" width="20px" height="20px">');
            output = output.replace(tongue,
                '<img src="images/emojis/smiley-14.png" width="20px" height="20px">');
            output = output.replace(embarrassing,
                '<img src="images/emojis/smiley-15.png" width="20px" height="20px">');
            output = output.replace(sad,
                '<img src="images/emojis/smiley-17.png" width="20px" height="20px">');
            output = output.replace(happy,
                '<img src="images/emojis/smiley-18.png" width="20px" height="20px">');
            output = output.replace(confused,
                '<img src="images/emojis/smiley-19.png" width="20px" height="20px">');
            output = output.replace(crying,
                '<img src="images/emojis/smiley-22.png" width="20px" height="20px">');
            output = output.replace(happyCrying,
                '<img src="images/emojis/smiley-23.png" width="20px" height="20px">');
            output = output.replace(disgust,
                '<img src="images/emojis/smiley-32.png" width="20px" height="20px">');
            output = output.replace(horror,
                '<img src="images/emojis/smiley-33.png" width="20px" height="20px">');
            output = output.replace(angry,
                '<img src="images/emojis/smiley-35.png" width="20px" height="20px">');
            output = output.replace(cool,
                '<img src="images/emojis/smiley-41.png" width="20px" height="20px">');
            output = output.replace(car,
                '<img src="images/emojis/orte-59.png" width="20px" height="20px">');
            output = output.replace(city,
                '<img src="images/emojis/orte-15.png" width="20px" height="20px">');
            output = output.replace(koala,
                '<img src="images/emojis/natur-09.png" width="20px" height="20px">');
            output = output.replace(burguer,
                '<img src="images/emojis/food-1.png" width="20px" height="20px">');
            output = output.replace(chips,
                '<img src="images/emojis/food-2.png" width="20px" height="20px">');
            output = output.replace(cookies,
                '<img src="images/emojis/food-3.png" width="20px" height="20px">');
            output = output.replace(donuts,
                '<img src="images/emojis/food-4.png" width="20px" height="20px">');
            output = output.replace(watermelon,
                '<img src="images/emojis/food-5.png" width="20px" height="20px">');
            output = output.replace(sweet,
                '<img src="images/emojis/food-6.png" width="20px" height="20px">');
            output = output.replace(pizza,
                '<img src="images/emojis/food-7.png" width="20px" height="20px">');
            output = output.replace(statue,
                '<img src="images/emojis/trips-1.png" width="20px" height="20px">');
            output = output.replace(lorry,
                '<img src="images/emojis/trips-2.png" width="20px" height="20px">');
            output = output.replace(plane,
                '<img src="images/emojis/trips-3.png" width="20px" height="20px">');
            output = output.replace(whale,
                '<img src="images/emojis/trips-4.png" width="20px" height="20px">');
            output = output.replace(train,
                '<img src="images/emojis/trips-5.png" width="20px" height="20px">');
            return $sce.trustAsHtml(output);
        };
    });