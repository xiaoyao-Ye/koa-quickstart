const fse = require('fs-extra')
const path = require('path')
// const resolve = (name) => path.resolve(__dirname, name)
const UPLOAD_DIR = path.resolve(__dirname, './', 'target');
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