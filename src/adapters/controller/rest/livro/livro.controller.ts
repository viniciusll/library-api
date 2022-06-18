import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { Livro } from 'src/domain/livro/livro';
import { CreateLivroService } from 'src/usecase/create-livro-service';
import { FindAllLivroService } from 'src/usecase/find-all-livro-service';
import { FindLivroByAutorNameService } from 'src/usecase/find-livro-by-autor-name-service';
import { ConfigServiceModule } from '../config/config-service.module';

@Controller('livro')
export class LivroController {
  constructor(
    @Inject(ConfigServiceModule.CREATE_LIVRO_SERVICE)
    private readonly createLivroService: CreateLivroService,
    @Inject(ConfigServiceModule.FIND_ALL_LIVRO_SERVICE)
    private readonly findAllLivroService: FindAllLivroService,
    @Inject(ConfigServiceModule.FIND_LIVRO_BY_AUTOR_NAME_SERVICE)
    private readonly findLivroByAutorNameService: FindLivroByAutorNameService,
  ) {}

  @Get()
  public findAll(): Promise<Livro[]> {
    return this.findAllLivroService.findAll();
  }

  @Get('/:autorName')
  public findLivroByAutorId(@Param() params): Promise<Livro[]> {
    return this.findLivroByAutorNameService.findLivroByAutorName(
      params.autorName,
    );
  }

  @Post()
  public createLivro(@Body() livro: Livro): Promise<Livro> {
    return this.createLivroService.create(livro);
  }
}
