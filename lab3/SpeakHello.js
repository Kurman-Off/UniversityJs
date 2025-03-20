`use strict`

let speakHello = (() => {
    let speakWord = "Hello";

    function speak(name) {
        console.log(speakWord + " " + name)
        return speakWord + " " + name;
    }

    return { speak };
})();
