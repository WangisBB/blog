
import {ApiProperty} from "@nestjs/swagger";
export class ArticleCreateDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    artTitle: string;
    @ApiProperty()
    abstract: string;
    @ApiProperty()
    category: string;
    @ApiProperty()
    tag: string;
    @ApiProperty()
    thumbnail: string;
    @ApiProperty()
    content: string;
    @ApiProperty()
    cdate: number;
    @ApiProperty()
    editdate: number;
    @ApiProperty()
    pv: number;
    @ApiProperty()
    discuss: number;
    @ApiProperty()
    status: number;
}