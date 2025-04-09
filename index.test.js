// calculatrice.test.js
const { addition, soustraction, multiplication, division } = require('./index');

describe('Tests de la fonction addition', () => {
  test('addition de 1 et 2 = 3', () => {
    expect(addition(1, 2)).toBe(3);
  });

  test('addition avec des nombres négatifs', () => {
    expect(addition(-5, -3)).toBe(-8);
    expect(addition(-5, 3)).toBe(-2);
  });

  test('addition avec des décimales', () => {
    expect(addition(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('addition avec zéro', () => {
    expect(addition(0, 100)).toBe(100);
  });

  test('addition avec de très grands nombres', () => {
    expect(addition(1e15, 1e15)).toBe(2e15);
  });
});

describe('Tests de la fonction soustraction', () => {
  test('soustraction de 5 et 3 = 2', () => {
    expect(soustraction(5, 3)).toBe(2);
  });

  test('soustraction avec des nombres négatifs', () => {
    expect(soustraction(-5, -3)).toBe(-2);
    expect(soustraction(-5, 3)).toBe(-8);
  });

  test('soustraction avec des décimales', () => {
    expect(soustraction(0.3, 0.1)).toBeCloseTo(0.2);
  });

  test('soustraction avec zéro', () => {
    expect(soustraction(0, 5)).toBe(-5);
  });
});

describe('Tests de la fonction multiplication', () => {
  test('multiplication de 4 et 5 = 20', () => {
    expect(multiplication(4, 5)).toBe(20);
  });

  test('multiplication avec des nombres négatifs', () => {
    expect(multiplication(-4, 5)).toBe(-20);
    expect(multiplication(-4, -5)).toBe(20);
  });

  test('multiplication avec zéro', () => {
    expect(multiplication(0, 100)).toBe(0);
  });

  test('multiplication avec des décimales', () => {
    expect(multiplication(0.5, 0.2)).toBeCloseTo(0.1);
  });
});

describe('Tests de la fonction division', () => {
  test('division de 10 par 2 = 5', () => {
    expect(division(10, 2)).toBe(5);
  });

  test('division avec des nombres négatifs', () => {
    expect(division(-10, 2)).toBe(-5);
    expect(division(-10, -2)).toBe(5);
  });

  test('division avec des décimales', () => {
    expect(division(0.3, 0.1)).toBeCloseTo(3);
  });

  test('division avec zéro en numérateur', () => {
    expect(division(0, 5)).toBe(0);
  });

  test('division par zéro doit lancer une erreur', () => {
    expect(() => division(10, 0)).toThrow('Division par zéro interdite');
  });
});
