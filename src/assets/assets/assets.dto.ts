import { IsNotEmpty } from 'class-validator';

export class AssetInputDTO {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  symbol: string;
}
export interface AssetOutputDTO {
  id: string;
  symbol: string;
}
