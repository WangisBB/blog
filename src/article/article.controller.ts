import {Body, Controller, HttpCode, Post, Put,Get, UseGuards,Query,Param, Delete} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiTags,ApiQuery} from "@nestjs/swagger";

import {ArticleService} from "./article.service";
import { ArticleCreateDto } from "./dto/article.dto";
import { GetArtcleDto } from "./dto/getartcle.dto";
import { QueryArtcleDto } from "./dto/queryartcle.dto";
@ApiTags('文章')
@Controller('article')
export class ArticleController {
    constructor(
        private readonly articleService: ArticleService
    ) {}
    @Post('Article')
    @ApiOperation({
        summary: '添加文章'
    })
    @HttpCode(200)
    async addArticle(@Body() params:ArticleCreateDto): Promise<any> {
        const addArt = await this.articleService.addArticle(params)
        return addArt
    }

    @Put('Article')
    @ApiOperation({
        summary: '编辑文章'
    })
    @HttpCode(200)
    // @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async editArticle(@Body() params:ArticleCreateDto): Promise<any> {
        const editArt = await this.articleService.editArticle(params)
        return editArt
    }

    @Get('Article')
    @ApiOperation({
        summary: '获取文章列表'
    })
    @HttpCode(200)
    async getArticleList(@Query() params:GetArtcleDto): Promise<any> {
        const List = await this.articleService.getArticleList(params)
        const total = await this.articleService.getArtCount()
        return {
         List,
            pageSize:params.pageSize,
            pageNum:params.pageNum,
            total
        }
    }
    @Get('Article/:id')
    @ApiOperation({
        summary: '获取文章详情'
    })
    @HttpCode(200)
    async getArticleDetail(@Param() params:QueryArtcleDto ): Promise<any> {
        const getArticleDetail = await this.articleService.getArticleDetail(params)
        return getArticleDetail 
    }
    @Delete('Article/:id')
    @ApiOperation({
        summary: '获取文章详情'
    })
    @HttpCode(200)
    async DelArticle(@Param() params:QueryArtcleDto ): Promise<any> {
        const deleteArticle = await this.articleService.deleteArticle(params)
        // console.log(params,deleteArticle)
        return deleteArticle
    }
}
