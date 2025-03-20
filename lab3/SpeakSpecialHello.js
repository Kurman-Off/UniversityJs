`use strict`

let speakSpecialHello = (() => {
    let speakWord = "Special Hello";

    function speak(name) {
        console.log(speakWord + " " + name)
        return speakWord + " " + name;
    }

    return { speak };
})();
