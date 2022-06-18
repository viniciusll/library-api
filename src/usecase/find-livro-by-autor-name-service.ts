import { Livro } from 'src/domain/livro/livro';
import { LivroRepository } from 'src/domain/ports/livro.repository';

export class FindLivroByAutorNameService {
  constructor(private readonly repository: LivroRepository) {}

  async findLivroByAutorName(autorName: string): Promise<Livro[]> {
    return this.repository.findLivroByAutorName(autorName);
  }
}
