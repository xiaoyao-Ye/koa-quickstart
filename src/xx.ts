// const fse = require('fs-extra')
// const path = require('path')
// const resolve = (name) => path.resolve(__dirname, name)
// const UPLOAD_DIR = path.resolve(__dirname, './', 'target');
// console.log(resolve('txt'));
// (async () => {
//     fse.mkdirs(resolve('txt.txt'))
//     fse.writeFile(resolve('txt.txt') + '1')
//     const arr = await fse.readdir(resolve('txt.txt'))
//     arr.forEach(chunkPath => {
//         fse.appendFileSync(resolve('txt.txt') + '1', fse.readFileSync(`${resolve('txt.txt')}/${chunkPath}`))
//         fse.unlinkSync(`${resolve('txt.txt')}/${chunkPath}`)
//     })
//     fse.rmdirSync(resolve('txt.txt'))
// })()

// let arr = [
//     '__UNI__440511E_0102171427.apk-9',
//     '__UNI__440511E_0102171427.apk-1',
//     '__UNI__440511E_0102171427.apk-4',
//     '__UNI__440511E_0102171427.apk-7',
//     '__UNI__440511E_0102171427.apk-14',
//     '__UNI__440511E_0102171427.apk-11',
//     '__UNI__440511E_0102171427.apk-2',
//     '__UNI__440511E_0102171427.apk-3',
//     '__UNI__440511E_0102171427.apk-8',
//     '__UNI__440511E_0102171427.apk-5',
//     '__UNI__440511E_0102171427.apk-13',
//     '__UNI__440511E_0102171427.apk-10',
//     '__UNI__440511E_0102171427.apk-12',
//     '__UNI__440511E_0102171427.apk-0',
//     '__UNI__440511E_0102171427.apk-6',
// ]
// let arr2 = [];
// arr.forEach(item => {
//     const num = item.split('__UNI__440511E_0102171427.apk-')[1]
//     console.log(num);
//     arr2[num] = item;
// })
// console.log(arr2);
// console.log(arr.sort((a, b) => a - b));
// console.log(path.resolve(UPLOAD_DIR, '__UNI__440511E_0102171427.apk'))
// console.log(UPLOAD_DIR);
// if (!fse.existsSync(path.resolve(UPLOAD_DIR, '__UNI__440511E_0102171427.apk'))) {
//     fse.writeFile(path.resolve(UPLOAD_DIR, '__UNI__440511E_0102171427.apk'));
//     console.log('11');
// }

// function test(person: any) {
//     person.age = 26
//     person = {
//         name: 'hzj',
//         age: 18
//     }
//     return person
// }
// const p1 = {
//     name: 'fyq',
//     age: 19
// }
// const p2 = test(p1)
// console.log(p1) // -> ?
// console.log(p2) // -> ?
// 原因: 在函数传参的时候传递的是对象在堆中的内存地址值，test函数中的实参person是p1对象的内存地址，
// 通过调用person.age = 26确实改变了p1的值，但随后person变成了另一块内存空间的地址，
// 并且在最后将这另外一份内存空间的地址返回，赋给了p2
/*
p1：{name: “fyq”, age: 26}
p2：{name: “hzj”, age: 18}
*/
// console.log([null, p1, 1, 34, 3].toString())

// console.log(9999999999999999);  //=>10000000000000000


let isDone: boolean = false;

let num: number = 1;

let str: string = 'hello world!'

let arrNum: number[] = [1, 34, 5]
let arrStr: string[] = ['1', '34', '5']
let arrBoolean: boolean[] = [true, false, false]

let arrNumF: Array<number> = [1, 34, 5]
let arrStrF: Array<string> = ['1', '34', '5']
let arrBooleanF: Array<boolean> = [true, false, false]

let tuple: [number, string, boolean] = [0, '2', false]

enum Color { red, green, blue }
let r: Color = Color.red
let g: Color = Color.green
let b: Color = Color.blue
console.log(r, g, b);   // 应该是0,1,2
enum ColorSon { red, green, blue = 50, pink, skyblue = 3 }    // 应该是0,1,50,60,3
console.log(ColorSon[50]);  // 应该是'blue'


let alln: any = 1
let allS: any = 'str'
let allB: any = false
let allArr: any = []
let anyArr: any[] = [1, '2', false, null, undefined]
let anyArrF: Array<any> = [1, '2', false, null, undefined]

let voidtype: void = undefined
function a(name: any): void {
    let NAME = name!    // 值后面加上!代表非空值
    console.log('没有返回值的函数返回值是void类型: undefined')
}

let num1: number | null = 1

function never(): never { throw new Error('msg') }


declare function create(o: object | null): void
create({ prop: 0 }) // OK
create(null) // OK
// create(42) // Error
// create('string') // Error
// create(false) // Error
// create(undefined) // Error


let strn: any = 'hello world!';
let strnlength: number = (<string>strn).length
let strnlength1: number = (strn as string).length

interface Obj {
    code: number,
    data: any,
    msg: string,
    tableData: Object[],
    form: Object,
}
function c(obj: Obj) {
    console.log(obj);
}
c({ code: 1, data: [1, 2], msg: '2', tableData: [{ a: '1234' }, {}], form: {} })

interface select {
    color?: string,     // 可选属性,可不赋值
    age?: number        // 可选属性
    id: number
}

interface Point {
    readonly x: number  // 只读
}
let p1: Point = { x: 1 }    // p1不能改变,重新给x赋值会报错

let readonlyArr: ReadonlyArray<number> = [1, 23, 0] // readonlyArr的所有可更改数组内容的api都去掉了.
let numa: number[] = [1, 31, 4]
numa = readonlyArr as number[]  // 也不能直接赋值,但可以用断言重写

