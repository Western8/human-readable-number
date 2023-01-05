module.exports = function toReadable(number) {

    let res = '';
    const numberString = number + '';
    const len = (numberString.length - 1);
    const hasDozen = (len > 0) && (numberString[len - 1] === '1');

    if (numberString === '') {
        return '';
    } else if (number === 0) {
        return 'zero';
    }

    for (let i = 0; i <= len; i++) {

        let str = '';

        if (hasDozen && (i === 0)) {
            continue;
        } else if (hasDozen && (i === 1)) {

            switch (numberString.slice(len - 1)) {

                case '11': str = 'eleven'; break;
                case '12': str = 'twelve'; break;
                case '13': str = 'thirteen'; break;
                case '14': str = 'fourteen'; break;
                case '15': str = 'fifteen'; break;
                case '16': str = 'sixteen'; break;
                case '17': str = 'seventeen'; break;
                case '18': str = 'eighteen'; break;
                case '19': str = 'nineteen'; break;
                case '10': str = 'ten'; break;

            }
        } else {


            switch (numberString[len - i]) {

                case '1': (i === 1) ? str = 'onety' : str = 'one'; break;
                case '2': (i === 1) ? str = 'twenty' : str = 'two'; break;
                case '3': (i === 1) ? str = 'thirty' : str = 'three'; break;
                case '4': (i === 1) ? str = 'forty' : str = 'four'; break;
                case '5': (i === 1) ? str = 'fifty' : str = 'five'; break;
                case '6': (i === 1) ? str = 'sixty' : str = 'six'; break;
                case '7': (i === 1) ? str = 'seventy' : str = 'seven'; break;
                case '8': (i === 1) ? str = 'eighty' : str = 'eight'; break;
                case '9': (i === 1) ? str = 'ninety' : str = 'nine'; break;
                case '0': str = ''; break;

                /*             case '1': str = 'one'; break;
                            case '2': str = 'two'; break;
                            case '3': str = 'three'; break;
                            case '4': str = 'four'; break;
                            case '5': str = 'five'; break;
                            case '6': str = 'six'; break;
                            case '7': str = 'seven'; break;
                            case '8': str = 'eight'; break;
                            case '9': str = 'nine'; break;
                            case '0': str = 'zero'; break;
                 */
            }
        }

        if (i === 2) {
            str = str + ' hundred'
        }

        res = `${str} ${res}`;

        res = res.trim();
    }

    return res;
}

let n = 9;
console.log(n);
res = module.exports(n);
console.log(res);

n = 15;
console.log(n);
res = module.exports(n);
console.log(res);

n = 20;
console.log(n);
res = module.exports(n);
console.log(res);

n = 56;
console.log(n);
res = module.exports(n);
console.log(res);

n = 209;
console.log(n);
res = module.exports(n);
console.log(res);

n = 211;
console.log(n);
res = module.exports(n);
console.log(res);

n = 320;
console.log(n);
res = module.exports(n);
console.log(res);

n = 456;
console.log(n);
res = module.exports(n);
console.log(res);
