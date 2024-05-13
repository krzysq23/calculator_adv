document.addEventListener("DOMContentLoaded", () => {
    
    // Obaługa przycisków
    var charBtns = document.querySelectorAll(".char");

    for (i = 0; i < charBtns.length; i++) {
        charBtns[i].onclick = charClick;
    }

    function charClick() {
        var value = this.id;
        document.calc.txt.value += value;
    }

    var numberBtns = document.querySelectorAll(".num");

    for (i = 0; i < numberBtns.length; i++) {
        numberBtns[i].onclick = numberClick;
    }

    function numberClick() {
        var value = this.id;
        document.calc.txt.value += value;
    }

    document.querySelector(".clear").onclick = function() {
        document.calc.txt.value = "";
    };

    document.querySelector(".division").onclick = function() {
        document.calc.txt.value += "/";
    };

    document.querySelector(".multiplication").onclick = function() {
        document.calc.txt.value += "*";
    };

    document.querySelector(".minus").onclick = function() {
        document.calc.txt.value += "-";
    };

    document.querySelector(".plus").onclick = function() {
        document.calc.txt.value += "+";
    };

    document.querySelector(".dot").onclick = function() {
        document.calc.txt.value += ".";
    };

    document.querySelector(".equal").onclick = function() {
        document.calc.txt.value=eval(calc.txt.value);
    };

    // Obaługa wyboru trybu kalkulatora
    document.querySelector(".type").onclick = function() {
        document.querySelector(".calculator-modal").style.display = "block";
    };

    document.querySelector(".close-modal").onclick = function() {
        document.querySelector(".calculator-modal").style.display = "none";
    };

    var typeBtns = document.querySelectorAll(".type-select");

    for (i = 0; i < typeBtns.length; i++) {
        typeBtns[i].onclick = closeModal;
    }

    function closeModal() {
        switch (this.id) {
            case "HEX":
                enableCharBtns();
                enableNumerBtns();
                break;
            case "DEC":
                disableCharBtns();
                enableNumerBtns();
                break;
            case "OCT":
                disableCharBtns();
                enableOCTNumerBtns();
                break;
            case "BIN":
                disableCharBtns();
                enableBINNumerBtns();
                break;
        }
        document.querySelector("span.type i").textContent = this.id;
        document.querySelector(".calculator-modal").style.display = "none";
    }
    
    function enableCharBtns() {
        var charBtns = document.getElementsByClassName("char");
        for (i = 0; i < charBtns.length; i++) {
            charBtns[i].classList.remove("disable");
        }
    }

    function disableCharBtns() {
        var charBtns = document.getElementsByClassName("char");
        for (i = 0; i < charBtns.length; i++) {
            charBtns[i].classList.add("disable");
        }
    }

    function enableNumerBtns() {
        var numBtns = document.getElementsByClassName("num");
        for (i = 0; i < numBtns.length; i++) {
            numBtns[i].classList.remove("disable");
        }
    }

    function enableOCTNumerBtns() {
        enableNumerBtns();
        document.getElementById("9").classList.add("disable");
        document.getElementById("8").classList.add("disable");
    }

    function enableBINNumerBtns() {
        enableNumerBtns();
        document.getElementById("9").classList.add("disable");
        document.getElementById("8").classList.add("disable");
        document.getElementById("7").classList.add("disable");
        document.getElementById("6").classList.add("disable");
        document.getElementById("5").classList.add("disable");
        document.getElementById("4").classList.add("disable");
        document.getElementById("3").classList.add("disable");
        document.getElementById("2").classList.add("disable");
    }

    // Obaługa notesu
    document.querySelector(".eraser").onclick = function() {
        document.querySelector(".paper .text").textContent = "";
    };

});