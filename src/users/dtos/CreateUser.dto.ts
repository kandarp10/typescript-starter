import {
  ArrayContains,
  CONTAINS,
  Contains,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(10)
  username: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;
}
