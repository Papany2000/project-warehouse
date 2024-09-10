import { ApiProperty } from '@nestjs/swagger';

export class GoodsDTO {
  @ApiProperty({ example: '1', description: 'идентификатор' })
  readonly id: number;
  @ApiProperty({ example: 'кольцо', description: 'изделие' })
  readonly name: string;
  @ApiProperty({ example: '3 шт', description: 'количество' })
  readonly quantity: string;
  @ApiProperty({ example: 'полка', description: 'место хранения' })
  readonly storageLocation: string;
}
