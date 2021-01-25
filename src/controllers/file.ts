const path = require("path");
const fse = require("fs-extra");
const multiparty = require("multiparty");
import { Context } from 'koa';

const UPLOAD_DIR = path.resolve(__dirname, '..', 'target'); // 文件存储目录

export default class FileController {
    public static async fileUpload(ctx: Context) {
        const multipart = new multiparty.Form();
        multipart.parse(null, async (err: any, fields: any, files: any) => {
            // console.log(req);
            if (err) return;
            const [chunk] = files.chunk;
            const [hash] = fields.hash;
            const [filename] = fields.filename;
            const chunkDir = path.resolve(UPLOAD_DIR, filename);

            // 如果文件目录不存在则创建一个文件,
            if (!fse.existsSync(chunkDir)) {
                await fse.mkdirs(chunkDir);
            }
            await fse.move(chunk.path, `${chunkDir}/${hash}`);
            ctx.body = '接收到块'
        })
    }
}