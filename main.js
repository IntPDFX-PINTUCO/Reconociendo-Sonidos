navigator.mediaDevices.getUserMedia({ audio: true })
ia = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/AzoZNrrud/model.json", listo)
function listo() {
    ia.classify(result)
}
function result(error, respuesta) {
    if (error) {
        console.log(error);
    } else {
        sonido = respuesta[0].label
        porcentaje = respuesta[0].confidence
        if (porcentaje > 0.5) {
            switch (sonido) {
                case "Maullido":
                    document.getElementById("im1").src = "gato maulla.gif"
                    document.getElementById("im2").src = "perro ladra imagen 2.png"
                    document.getElementById("im3").src = "jerry silva imagen 3.png"
                    document.getElementById("im4").src = "imagen 4 vaca.png"
                    break;
                case "Ladrido":
                    document.getElementById("im1").src = "gato maulla imagen 1.png"
                    document.getElementById("im2").src = "dog-55f9055c.gif"
                    document.getElementById("im3").src = "jerry silva imagen 3.png"
                    document.getElementById("im4").src = "imagen 4 vaca.png"
                    break;
                case "Silvido":
                    document.getElementById("im1").src = "gato maulla imagen 1.png"
                    document.getElementById("im2").src = "perro ladra imagen 2.png"
                    document.getElementById("im3").src = "jerry silva.gif"
                    document.getElementById("im4").src = "imagen 4 vaca.png"
                    break;
                case "Vaca muu":
                    document.getElementById("im1").src = "gato maulla imagen 1.png"
                    document.getElementById("im2").src = "perro ladra imagen 2.png"
                    document.getElementById("im3").src = "jerry silva imagen 3.png"
                    document.getElementById("im4").src = "vaca muu.gif"
                    break;


                default:
                    break;
            }
        }
    }
}