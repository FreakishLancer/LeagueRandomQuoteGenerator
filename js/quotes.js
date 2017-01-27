class Champion {
    constructor(name) {
        this.name = name;
        this.splashURL = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.name}_0.jpg`;
    }
}

const soraka = new Champion("Soraka");

newquote.onclick = () => {
    document.getElementById("splash").src = soraka.splashURL;
    document.getElementById("championquote").innerHTML = "Hello";
};