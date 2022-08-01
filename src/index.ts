type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type Range<Min extends number, Max extends number> = Exclude<Enumerate<Max>, Enumerate<Min>>

const minIdLength = 5;
const maxIdLength = 10;
const generatedIds: string[] = [];


export const randomId = (idLength: Range<5, 11>) => {
  if (typeof idLength !== 'number') throw Error('Provided argument is not a number!');
  const generatedIdLength = idLength < minIdLength ? minIdLength : idLength <= maxIdLength ? idLength : maxIdLength; 
  let id = '';
  const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!_@#$%^&';
  const charactersAmount = possibleCharacters.length;
  for (let i = 0; i < generatedIdLength; i++) {
    const randomCharacter = possibleCharacters[Math.floor(Math.random() * charactersAmount)];
    id += randomCharacter;
  }
  if (generatedIds.indexOf(id) === -1) {
    generatedIds.push(id);
  } else {
    randomId(idLength);
  }
  return id;
};
