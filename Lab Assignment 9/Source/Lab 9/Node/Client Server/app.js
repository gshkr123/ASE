/**
 * Created by Ravi on 14-09-2016.

 */

'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])


    .controller('View1Ctrl', function ($scope, $http) {

        $scope.convertTextToSpeech = function () {
            var text = document.getElementById("text").value;
            var textToSpeechUrl = 'https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=dd996d1c-0dd8-4359-b681-82f8cfe35ad7&password=GddpDu7LlqpR&text=' + text;

            var audio = "<video controls='' autoplay='' name='media'><source src='" + textToSpeechUrl + "' type='audio/ogg'></video>";
            document.getElementById("playAudio").innerHTML = audio;
        }
    });