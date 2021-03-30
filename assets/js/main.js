// On gère l'intensité
let array;
let values;
let length;
let average;

document.getElementById("Emmy0").innerHTML = '<img class="chara" src="' + frame[0].image + '"/>';


navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(function(stream) {
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

        analyser.smoothingTimeConstant = 0.8;
        analyser.fftSize = 1024;

        microphone.connect(analyser);
        analyser.connect(javascriptNode);
        javascriptNode.connect(audioContext.destination);
        javascriptNode.onaudioprocess = function() {
            array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            values = 0;

            length = array.length;
            for (let i = 0; i < length; i++) {
                values += (array[i]);
            }
            average = values / length;



            const clos = 1;
            const mini = 4;
            const maxi = 40;



            function neutre() {
                if (average < mini) {
                    document.getElementById("Emmy0").innerHTML = '<img class="chara" src="' + frame[0].image + '"/>';
                } else if (average > mini && average < mini + clos) {
                    document.getElementById("Emmy0").innerHTML = '<img class="chara" src="' + frame[1].image + '"/>';
                } else if (average > mini + clos && average < mini * 2) {
                    document.getElementById("Emmy0").innerHTML = '<img class="chara" src="' + frame[2].image + '"/>';
                } else if (average > mini * 2 && average < maxi - (mini * 2)) {
                    document.getElementById("Emmy0").innerHTML = '<img class="chara" src="' + frame[3].image + '"/>';
                } else if (average > maxi - (mini * 2) && average < maxi - mini) {
                    document.getElementById("Emmy0").innerHTML = '<img class="chara" src="' + frame[4].image + '"/>';
                } else {
                    document.getElementById("Emmy0").innerHTML = '<img class="chara" src="' + frame[5].image + '"/>';
                }
            }

            function heureuse() {

                if (average < mini) {
                    document.getElementById("Emmy1").innerHTML = '<img class="chara" src="' + frame[6].image + '"/>';
                } else if (average > mini && average < mini + clos) {
                    document.getElementById("Emmy1").innerHTML = '<img class="chara" src="' + frame[7].image + '"/>';
                } else if (average > mini + clos && average < mini * 2) {
                    document.getElementById("Emmy1").innerHTML = '<img class="chara" src="' + frame[8].image + '"/>';
                } else if (average > mini * 2 && average < maxi - (mini * 2)) {
                    document.getElementById("Emmy1").innerHTML = '<img class="chara" src="' + frame[9].image + '"/>';
                } else if (average > maxi - (mini * 2) && average < maxi - mini) {
                    document.getElementById("Emmy1").innerHTML = '<img class="chara" src="' + frame[10].image + '"/>';
                } else {
                    document.getElementById("Emmy1").innerHTML = '<img class="chara" src="' + frame[11].image + '"/>';
                }
            }

            function doigt() {

                if (average < mini) {
                    document.getElementById("Emmy2").innerHTML = '<img class="chara" src="' + frame[12].image + '"/>';
                } else if (average > mini && average < mini + clos) {
                    document.getElementById("Emmy2").innerHTML = '<img class="chara" src="' + frame[13].image + '"/>';
                } else if (average > mini + clos && average < maxi - mini) {
                    document.getElementById("Emmy2").innerHTML = '<img class="chara" src="' + frame[14].image + '"/>';
                } else {
                    document.getElementById("Emmy2").innerHTML = '<img class="chara" src="' + frame[15].image + '"/>';
                }
            }

            function pense() {

                if (average < mini) {
                    document.getElementById("Emmy3").innerHTML = '<img class="chara" src="' + frame[16].image + '"/>';
                } else if (average > mini && average < mini + clos) {
                    document.getElementById("Emmy3").innerHTML = '<img class="chara" src="' + frame[17].image + '"/>';
                } else if (average > mini + clos && average < maxi - mini) {
                    document.getElementById("Emmy3").innerHTML = '<img class="chara" src="' + frame[18].image + '"/>';
                } else {
                    document.getElementById("Emmy3").innerHTML = '<img class="chara" src="' + frame[19].image + '"/>';
                }
            }

            function note() {

                if (average < mini) {
                    document.getElementById("Emmy4").innerHTML = '<img class="chara" src="' + frame[20].image + '"/>';
                } else if (average > mini && average < mini + clos) {
                    document.getElementById("Emmy4").innerHTML = '<img class="chara" src="' + frame[21].image + '"/>';
                } else if (average > mini + clos && average < mini + (clos * 2)) {
                    document.getElementById("Emmy4").innerHTML = '<img class="chara" src="' + frame[22].image + '"/>';
                } else if (average > mini + (clos * 2) && average < maxi - mini) {
                    document.getElementById("Emmy4").innerHTML = '<img class="chara" src="' + frame[23].image + '"/>';
                } else if (average > maxi - mini && average < maxi - clos) {
                    document.getElementById("Emmy4").innerHTML = '<img class="chara" src="' + frame[24].image + '"/>';
                } else {
                    document.getElementById("Emmy4").innerHTML = '<img class="chara" src="' + frame[25].image + '"/>';
                }
            }

            function taille() {

                if (average < mini) {
                    document.getElementById("Emmy5").innerHTML = '<img class="chara" src="' + frame[26].image + '"/>';
                } else if (average > mini && average < mini + clos) {
                    document.getElementById("Emmy5").innerHTML = '<img class="chara" src="' + frame[27].image + '"/>';
                } else if (average > mini - clos && average < mini * 2) {
                    document.getElementById("Emmy5").innerHTML = '<img class="chara" src="' + frame[28].image + '"/>';
                } else if (average > mini * 2 && average < maxi - mini) {
                    document.getElementById("Emmy5").innerHTML = '<img class="chara" src="' + frame[29].image + '"/>';
                } else {
                    document.getElementById("Emmy5").innerHTML = '<img class="chara" src="' + frame[30].image + '"/>';
                }
            }

            function gratte() {

                if (average < mini) {
                    document.getElementById("Emmy6").innerHTML = '<img class="chara" src="' + frame[31].image + '"/>';
                } else if (average > mini && average < mini + clos) {
                    document.getElementById("Emmy6").innerHTML = '<img class="chara" src="' + frame[32].image + '"/>';
                } else if (average > mini + clos && average < mini + (clos * 2)) {
                    document.getElementById("Emmy6").innerHTML = '<img class="chara" src="' + frame[33].image + '"/>';
                } else {
                    document.getElementById("Emmy6").innerHTML = '<img class="chara" src="' + frame[34].image + '"/>';
                }
            }

            function photo() {

                if (average < mini) {
                    document.getElementById("Emmy7").innerHTML = '<img class="chara" src="' + frame[35].image + '"/>';
                } else if (average > mini && average < mini + clos) {
                    document.getElementById("Emmy7").innerHTML = '<img class="chara" src="' + frame[36].image + '"/>';
                } else {
                    document.getElementById("Emmy7").innerHTML = '<img class="chara" src="' + frame[37].image + '"/>';
                }
            }

            function croise() {

                if (average < mini) {
                    document.getElementById("Emmy8").innerHTML = '<img class="chara" src="' + frame[38].image + '"/>';
                } else if (average > mini && average < mini + clos) {
                    document.getElementById("Emmy8").innerHTML = '<img class="chara" src="' + frame[39].image + '"/>';
                } else if (average > mini + clos && average < mini * 2) {
                    document.getElementById("Emmy8").innerHTML = '<img class="chara" src="' + frame[40].image + '"/>';
                } else {
                    document.getElementById("Emmy8").innerHTML = '<img class="chara" src="' + frame[41].image + '"/>';
                }
            }
            neutre();
            heureuse();
            doigt();
            pense();
            note();
            taille();
            gratte();
            photo();
            croise();

        }
    })