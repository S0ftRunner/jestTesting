const {fromFormToServer} = require('./fromFormToServer.js');


describe('fromFormToServer function', () => {
  test('should convert domestic juridical person correctly', () => {
    const personInForm = {
      isForeign: false,
      isJuridical: true,
      title: 'Company',
      tin: '1234567890',
    };
    const expectedResult = {
      type: 'juridical',
      tin: '1234567890',
      name: null,
      foreign_tin: null,
      company_title: 'Company',
    };
    expect(fromFormToServer(personInForm)).toEqual(expectedResult);
  });

  test('should convert foreign physical person correctly', () => {
    const personInForm = {
      isForeign: true,
      isJuridical: false,
      title: 'John Doe',
      tin: '0987654321',
    };
    const expectedResult = {
      type: 'foreign_physical',
      tin: null,
      name: 'John Doe',
      foreign_tin: '0987654321',
      company_title: null,
    };
    expect(fromFormToServer(personInForm)).toEqual(expectedResult);
  });

  test('should convert foreign juridical person correctly', () => {
    const personInForm = {
      isForeign: true,
      isJuridical: true,
      title: 'Company Ltd',
      tin: '2468101214',
    };
    const expectedResult = {
      type: 'foreign_juridical',
      tin: null,
      name: null,
      foreign_tin: '2468101214',
      company_title: 'Company Ltd',
    };
    expect(fromFormToServer(personInForm)).toEqual(expectedResult);
  });

  test('should convert domestic physical person correctly', () => {
    const personInForm = {
      isForeign: false,
      isJuridical: false,
      title: 'Alice Smith',
      tin: '5555555555',
    };
    const expectedResult = {
      type: 'physical',
      tin: '5555555555',
      name: 'Alice Smith',
      foreign_tin: null,
      company_title: null,
    };
    expect(fromFormToServer(personInForm)).toEqual(expectedResult);
  });
});
