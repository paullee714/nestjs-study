import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAllMovies() {
    return 'This will Return All Movies';
  }

  // @Get('search')
  // searchMovie(@Query('year') searchYear: string) {
  //   return searchYear;
  // }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `This will Return #${movieId} Movies`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete(':id')
  deleteOne(@Param('id') movieId: string) {
    return `This will  Delete #${movieId} Movies`;
  }

  @Patch(':id')
  updateOne(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovieId: movieId,
      updateMovieData: updateData,
    };
  }
}
