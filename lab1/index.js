`use strict`;

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

function triangle(value1, type1, value2, type2) {
    console.log(`triangle(${value1}, ${type1}, ${value2}, ${type2})`);

    const validTypes = ['leg', 'hypotenuse', 'adjacent angle', 'opposite angle', 'angle'];

    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log('Invalid type provided. Please check the instructions.');
        return 'failed';
    }

    if (value1 <= 0 || value2 <= 0) {
        console.log('Values must be positive.');
        return 'failed';
    }

    if ((type1.includes('angle') && type2.includes('angle')) || (type1 === 'hypotenuse' && type2 === 'hypotenuse')) {
        console.log('Invalid combination of types.');
        return 'failed';
    }

    if (type2 === 'angle') {
        [value1, value2] = [value2, value1];
        [type1, type2] = [type2, type1];
    }

    if (type1 === 'leg' && type2 !== 'leg') {
        [value1, value2] = [value2, value1];
        [type1, type2] = [type2, type1];
    }
    let a, b, c, alpha, beta;
    switch (`${type1}-${type2}`) {
        case 'leg-leg': {
            a = value1;
            b = value2;
            const sumSqrLegs = Math.pow(a, 2) + Math.pow(b, 2);
            c = Math.sqrt(sumSqrLegs);
            alpha = Math.atan(a / b);
            beta = 90 - toDegrees(alpha);

            console.log(`a = ${a}\nb = ${b}\nc = ${c}\nalpha = ${toDegrees(alpha)}\nbeta = ${beta}`);
            break;
        } case 'hypotenuse-leg': {
            if (value1 <= value2) {
                console.log('The hypotenuse cannot be smaller than the leg');
                return 'the hypotenuse cannot be smaller than the leg';
            }

            a = value2;
            c = value1;
            const diffSqrLegAndHypotenuse = Math.pow(c, 2) - Math.pow(a, 2);
            b = Math.sqrt(diffSqrLegAndHypotenuse);
            alpha = Math.atan(a / b);
            beta = 90 - toDegrees(alpha);

            console.log(`a = ${a}\nb = ${b}\nc = ${c}\nalpha = ${toDegrees(alpha)}\nbeta = ${beta}`);
            break;
        } case 'angle-hypotenuse': {
            if (value1 >= 90) {
                console.log('The angle cannot be equal to or greater than 90 degrees.')
                return 'The angle cannot be equal to or greater than 90 degrees.'
            }

            c = value2;
            alpha = value1;
            a = c * Math.cos(toRadians(alpha));
            b = c * Math.sin(toRadians(alpha));
            beta = 90 - alpha;

            console.log(`a = ${a}\nb = ${b}\nc = ${c}\nalpha = ${alpha}\nbeta = ${beta}`);
            break;
        } case 'opposite angle-leg': {
            if (value1 >= 90) {
                console.log('The angle cannot be equal to or greater than 90 degrees.')
                return 'The angle cannot be equal to or greater than 90 degrees.'
            }

            alpha = value1;
            a = value2;
            c = a / Math.cos(toRadians(alpha));
            b = a * Math.tan(toRadians(alpha));
            beta = 90 - alpha;

            console.log(`a = ${a}\nb = ${b}\nc = ${c}\nalpha = ${alpha}\nbeta = ${beta}`);
            break;
        } case 'adjacent angle-leg': {
            if (value1 >= 90) {
                console.log('The angle cannot be equal to or greater than 90 degrees.')
                return 'The angle cannot be equal to or greater than 90 degrees.'
            }

            beta = value1;
            a = value2;
            c = a / Math.sin(toRadians(beta));
            b = a / Math.tan(toRadians(beta));
            alpha = 90 - beta;

            console.log(`a = ${a}\nb = ${b}\nc = ${c}\nalpha = ${alpha}\nbeta = ${beta}`);
            break;
        } default:
            console.log('Invalid type combination.');
            return 'failed';
    }

    console.log('success');
    return 'success';
}

// let value1 = parseFloat(prompt("Введіть перше значення:"));
// let type1 = prompt("Введіть тип першого значення (наприклад: 'leg', 'hypotenuse', 'adjacent angle', 'opposite angle', 'angle'):");
// let value2 = parseFloat(prompt("Введіть друге значення:"));
// let type2 = prompt("Введіть тип другого значення (наприклад: 'leg', 'hypotenuse', 'adjacent angle', 'opposite angle', 'angle'):");

// triangle(value1, type1, value2, type2);
// triangle(3, 'leg', 3, 'leg');
// triangle(0.66, 'leg', 0.6, 'leg');
// triangle(2, 'hypotenuse', 1, 'leg');
// triangle(9, 'hypotenuse', 7, 'leg');
// triangle(7, 'leg', 9, 'hypotenuse');
// triangle(89, 'angle', 7, 'hypotenuse');
// triangle(30, 'angle', 11, 'hypotenuse');
// triangle(11, 'hypotenuse', 30, 'angle');
// triangle(56, 'opposite angle', 8, 'leg');
// triangle(8, 'leg', 56, 'opposite angle');
// triangle(65, 'adjacent angle', 12, 'leg');
// triangle(12, 'leg', 65, 'adjacent angle');
