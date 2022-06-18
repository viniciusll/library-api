import { Livro } from '../livro/livro';

export interface LivroRepository {
  save(livro: Livro): Promise<Livro>;
  findAll(): Promise<Livro[]>;
  findLivroByAutorName(autorName: string): Promise<Livro[]>;
}
