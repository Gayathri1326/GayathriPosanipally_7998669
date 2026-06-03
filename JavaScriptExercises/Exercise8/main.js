console.log("JS Loaded");

// Wait until page fully loads
window.onload = function () {

    const btn = document.getElementById("registerBtn");

    btn.addEventListener("click", function () {
        console.log("Registered Successfully");
        alert("Registered Successfully");
    });

    document.getElementById("category").addEventListener("change", function (e) {
        console.log("Category changed:", e.target.value);
    });

    document.getElementById("search").addEventListener("keydown", function (e) {
        console.log("Key pressed:", e.key);
    });
};