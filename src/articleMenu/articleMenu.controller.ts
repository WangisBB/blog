import {Body, Controller, HttpCode, Post, Put,Get, UseGuards,Query,Param, Delete} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiTags,ApiQuery} from "@nestjs/swagger";

import {articleMenuService} from "./articleMenu.service";
import { articleMenuCreateDto,GetArtcleDto,QueryArtcleDto,ArticleDetailDto } from "./dto/article.dto";

@ApiTags('文集')
@Controller('articleMenu')
export class articleMenuController {
    constructor(
        private readonly articleMenuService: articleMenuService
    ) {}
    @Post()
    @ApiOperation({
        summary: '添加文集'
    })
    @HttpCode(200)
    async addarticleMenu(@Body() params:articleMenuCreateDto): Promise<any> {
        const addArt = await this.articleMenuService.addarticleMenu(params)
        return addArt
    }

    @Put()
    @ApiOperation({
        summary: '编辑文集'
    })
    @HttpCode(200)
    // @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async editArticle(@Body() params:articleMenuCreateDto): Promise<any> {
        const editArt = await this.articleMenuService.editArticle(params)
        return editArt
    }

    @Get('tree')
    @ApiOperation({
        summary: '获取文集列表tree'
    })
    @HttpCode(200)
    async getArticleMenuTree(): Promise<any> {
        const List = await this.articleMenuService.getArticleMenuTree()
        return List
    }
    @Get('list')
    @ApiOperation({
        summary: '获取文集列表list'
    })
    @HttpCode(200)
    async getArticleMenuList(): Promise<any> {
        const List = await this.articleMenuService.getArticleMenuList()
        return List
    }
    @Get()
    @ApiOperation({
        summary: '获取文集列表'
    })
    @HttpCode(200)
    async getArticleMenu(): Promise<any> {
        const List = await this.articleMenuService.getArticleMenu()
        return List
    }
    @Get(':id')
    @ApiOperation({
        summary: '获取文集详情'
    })
    @HttpCode(200)
    async getArticleDetail(@Param() params:ArticleDetailDto): Promise<any> {
        const List = await this.articleMenuService.getArticleDetail(params)
        return List
    }

    @Delete(':id')
    @ApiOperation({
        summary: '删除文集列表'
    })
    @HttpCode(200)
    async DelArticle(@Param() params:QueryArtcleDto ): Promise<any> {
        const deleteArticle = await this.articleMenuService.deleteArticle(params)
        // console.log(params,deleteArticle)
        return deleteArticle
    }
}
