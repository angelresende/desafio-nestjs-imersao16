import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class OrderInputDTO {
  @IsNotEmpty()
  asset_id: string;

  @IsNumber()
  @IsPositive()
  price: number;
}

export interface OrderOutputDTO {
  id: string;
  asset_id: string;
  price: number;
  status: 'pending' | 'open' | 'closed';
}
