import {
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { AuthAndDatabaseGuard } from 'src/config/guards/auth.guards';
import { ArmarioService } from './armario.service';
import { CreateArmaroDTO } from './dto/create-armario.dto';
import { UpdateArmarioDTO } from './dto/update-armario.dto';

@Controller('api/v1/armario')
@UseGuards(AuthAndDatabaseGuard)
export class ArmarioController {
  constructor(private service: ArmarioService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
  @Get(':id')
  find(@Param('id') id: number) {
    return this.service.find(+id);
  }
  @Post()
  create(@Body() data: CreateArmaroDTO) {
    return this.service.create(data);
  }
  @Put()
  update(@Body() data: UpdateArmarioDTO) {
    return this.service.update(data);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
