const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
cats.unshift(name);
return cats;
}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}

function appendCat(name) {
    const moreCats = [...cats, name];
    return moreCats;
}

function prependCat(name) {
    const evenMoreCats = [name, ...cats];
    return evenMoreCats;
}

function removeLastCat() {
    const lastCats = cats.slice (0, -1);
    return lastCats;
}

function removeFirstCat() { 
    const firstCats = cats.slice();
    firstCats.shift();
    return firstCats;
}
