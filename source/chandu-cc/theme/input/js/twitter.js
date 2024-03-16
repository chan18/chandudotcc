document.getElementById('myLink').addEventListener('click', function (event) {
    event.preventDefault();


    if (document.querySelectorAll("#twitter")[0].classList.contains("hidden")) {

        document.querySelectorAll("#twitter")[0].classList.remove("hidden");
    }
    else {
        document.querySelectorAll("#twitter")[0].classList.add("hidden");
    }
});