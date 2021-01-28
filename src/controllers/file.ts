const path = require("path");
const fse = require("fs-extra");
const multiparty = require("multiparty");
import { Context } from 'koa';

const UPLOAD_DIR = path.resolve(__dirname, '../', 'target'); // 文件存储目录

export default class FileController {
    public static async fileUpload(ctx: Context) {
        const multipart = new multiparty.Form();
        multipart.parse(ctx.req, async (err: any, fields: any, files: any) => {
            if (err) return;
            const [chunk] = files.chunk;
            const [hash] = fields.hash;
            const [filename] = fields.filename;
            const chunkDir = path.resolve(UPLOAD_DIR, filename + '$file');

            // 如果文件目录不存在则创建一个文件,
            if (!fse.existsSync(chunkDir)) {
                await fse.mkdirs(chunkDir);
            }
            // 如果切片已存在应该进行覆盖,如果后续合并等步骤出现错误应清理该文件目录及对应的切片
            await fse.move(chunk.path, `${chunkDir}/${hash}`);
        })
        ctx.status = 200;
        ctx.body = {
            code: 200,
            data: '接受到块',
            msg: ''
        }
    }

    public static async fileMerge(ctx: Context) {
        // const resolvePost = (req: any) => {
        //     new Promise(resolve => {
        //         let chunk = ""
        //         req.on("data", (data: any) => chunk += data)
        //         req.on("end", () => resolve(JSON.parse(chunk)))
        //     })
        // }
        const mergeFileChunk = async (filePath: String, filename: String) => {
            const chunkDir = `${UPLOAD_DIR}/${filename}$file`
            // console.log('chunkDir/g:', chunkDir.replace(/\\/g, '/'));    // path处理的路径是\而程序最好是/可以用正则转换一下

            setTimeout(() => {  // 文件上传是异步的,如果文件还没上传成功fse.readdirSync可能读取不到文件名，实际项目要确认文件已上传完毕才能执行以下代码
                // fse.readdir异步枚举目录的文件名
                const chunkPaths = fse.readdirSync(chunkDir)
                // console.log(chunkPaths.length);
                fse.writeFile(filePath)
                // chunkPaths读取出来的顺序是不对的,合成的文件可能会损坏,应该根据切片顺序排序在进行合并处理
                let chunkPathsSort: String[] = [];
                chunkPaths.forEach((item: String) => chunkPathsSort[Number(item.split(`${filename}-`)[1])] = item)
                console.log(chunkPathsSort);
                chunkPathsSort.forEach((chunkPath: String) => {
                    fse.appendFileSync(filePath, fse.readFileSync(`${chunkDir}/${chunkPath}`))
                    fse.unlinkSync(`${chunkDir}/${chunkPath}`)
                })
                fse.rmdirSync(chunkDir) // 合并后删除保存切片的目录
            }, 200);
        }

        // const data = await resolvePost(req)
        // const { filename } = data
        const filename = ctx.request.body.filename;
        const filePath = `${UPLOAD_DIR}/${filename}`
        // 如果已经存在同名文件则不进行文件合并(应该为根据文件生成的hash判断是否同一文件,并且要增加判断: 合并错误失败等情况要删除失败的文件和文件目录)
        if (!fse.existsSync(filePath)) {
            await mergeFileChunk(filePath, filename)
        }
        ctx.status = 200
        ctx.body = {
            code: 200,
            data: '',
            msg: '合并切片成功!'
        }
    }
}