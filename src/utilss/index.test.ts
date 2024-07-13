import { Test } from './index.ts'; // Замените на путь к вашему файлу с функцией

describe('Test function', () => {
    it('should correctly add two numbers', () => {
        // Arrange
        const a = 3;
        const b = 7;

        // Act
        const result = Test(a, b);

        // Assert
        expect(result).toBe(10); // Ожидаем, что сумма a и b равна 10
    });

    it('should handle negative numbers correctly', () => {
        // Arrange
        const a = -5;
        const b = 2;

        // Act
        const result = Test(a, b);

        // Assert
        expect(result).toBe(-3); // Ожидаем, что сумма a и b равна -3
    });

    // Добавьте другие тесты по необходимости
});