import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateTest1Dto } from './dto/create-test1.dto';
import { UpdateTest1Dto } from './dto/update-test1.dto';

@Controller('test1')
export class Test1Controller {
  @Get()
  getTest1(@Query('type') type: string) {
    return [{ type }];
  }

  @Get(':id')
  getTest1ById(@Param('id') id: string) {
    return {
      id,
    };
  }

  @Post()
  createTest1(@Body() createTest1Dto: CreateTest1Dto) {
    return {
      name: createTest1Dto.name,
    };
  }

  @Put(':id')
  updateTest1(@Param('id') id: string, @Body() updateTest1Dto: UpdateTest1Dto) {
    return {
      id,
      name: updateTest1Dto,
    };
  }

  @Delete(':id')
  deleteTest1(@Param('id') id: string) {
    return {
      id,
    };
  }
}
