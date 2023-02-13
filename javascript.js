/* 
// 템플릿 문자열
const string1 = "안녕하세요";
const string2 = "반갑습니다";
const greeting = `${string1} ${string2}`;
const product = {
    name: '도서',
    price: '4200원'
};
const multi_line = `문자열1
문자열2`;
const value1 = 5;
const value2 = 3;
const bool_value = true;

console.log(`결과는 ${bool_value ? '사실' : '거짓'} 입니다.`);

const cart = {
    name: '도서',
    price: '4200'
};

const cart2 = {
    name: '도서2',
    price: '42000'
};

const getTotal = function (product) {
    return `${product.price}원`;
}

console.log(`장바구니에는 ${cart2.name}이(가) 있습니다. 총 금액은 ${getTotal(cart2)} 입니다.`);
*/


// 전개 연산자 (배열)
/*
const array1 = ['one', 'two'];
const array2 = ['three', 'four'];
let combined = [...array1, ...array2]; // concat 대신 전개 연산자

const [first, second, three = 'empty', ...others] = array1;
// const first = array1[0];
// const second = array1[1];
// const three = array1[2] || 'empty';

function func(...args) {
    // const args = Array.prototype.slice.call(arguments);
    // const first = args[0];
    // const others = args.slice(1, args.length);

    const [first, ...others] = args;
    return `원형 ${args}는 첫번째 ${first}와 나머지 ${others} 입니다.`;
}
*/

// 전개 연산자 (객체)
/*
const objectOne = {
    one: 1,
    two: 2,
    other: 0
};

const objectTwo = {
    three: 3,
    four: 4,
    other: -1
};

let combined = {
    ...objectOne,
    ...objectTwo
}

combined = {
    ...objectTwo,
    ...objectOne
}

// let others = Object.assign({}, combined);
// delete others.other;
const { other, ...others } = combined;

console.log(other);
*/

// 클래스 문법
