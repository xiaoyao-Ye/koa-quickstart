import { Context } from 'koa';
import { getManager } from 'typeorm';

import { article } from '../entity/article';

export default class ArticleController {
    public static async addArticle(ctx: Context) {
        const articleRepository = getManager().getRepository(article);
        if (!ctx.request.body.title) return ctx.body = '请输入文章标题'
        if (!ctx.request.body.username) return ctx.body = '创建人姓名为空'
        if (!ctx.request.body.content) return ctx.body = '请输入文章内容'

        const newArticle = new article()
        newArticle.title = ctx.request.body.title
        newArticle.username = ctx.request.body.username
        newArticle.content = ctx.request.body.content
        newArticle.date = new Date()
        await articleRepository.save(newArticle);

        ctx.status = 200;
        ctx.body = {
            code: 200,
            data: '成功创建文章!',
            msg: ''
        }
    }
}