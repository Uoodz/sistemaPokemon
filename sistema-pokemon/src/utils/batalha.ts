type Pokemon = {
  id: number;
  name: string;
  stats: {
    base_stat: number;
  }[];
};

export function calcularMediaStatus(pokemon: Pokemon) {
  let soma = 0;

  for (let i = 0; i < pokemon.stats.length; i++) {
    soma = soma + pokemon.stats[i].base_stat;
  }

  return soma / 6;
}

export function duelarPorStatus(meuPokemon: Pokemon, pokemonRival: Pokemon) {
  const minhaMedia = calcularMediaStatus(meuPokemon).toFixed(1);
  const mediaRival = calcularMediaStatus(pokemonRival).toFixed(1);

  if (minhaMedia > mediaRival) {
    return 'Parabéns! Você venceu o duelo!';
  } else if (mediaRival > minhaMedia) {
    return 'Você perdeu o duelo.';
  } else {
    return 'O duelo terminou empatado.';
  }
}
