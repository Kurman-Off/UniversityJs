`use strict`

let speakGoodBye = (() => {
    let speakWord = "Good Bye";

    function speak(name) {
        console.log(speakWord + " " + name)
        return speakWord + " " + name;
    }

    return { speak };
})();
