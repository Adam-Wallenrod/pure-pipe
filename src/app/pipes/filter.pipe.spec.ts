import {FilterPipe} from './filter.pipe';
import {Dude} from '../Dude';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();
  const mockArrayOfDudes: Dude[] = [
    {name: 'Mario', age: 29},
    {name: 'Luigi', age: 28},
    {name: 'Aragorn', age: 33},
    {name: 'Bilbo', age: 69}
  ];


  it('should filter Bilbo object', () => {
    const pipeResult: Dude[] = pipe.transform(mockArrayOfDudes, 'Bilbo');
    expect(pipeResult[0].name).toBe('Bilbo');
    expect(pipeResult[0].age).toBe(mockArrayOfDudes[3].age);
  });


  it('should find Bilbo object when using lowe case', () => {
    const pipeResult: Dude[] = pipe.transform(mockArrayOfDudes, 'bilbo');
    expect(pipeResult.length).toEqual(1);
    expect(pipeResult[0].name).toBe('Bilbo');
  });


  it('should return an empty array of results', () => {
    const pipeResult: Dude[] = pipe.transform(mockArrayOfDudes, 'Bob');
    expect(pipeResult.length).toBe(0);
  });


});
