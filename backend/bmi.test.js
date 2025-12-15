const { describe } = require('node:test')
const { calculateBMI } = require('./bmi')
describe('BMI boundary 18.4 | 18.5', () => {
    it('should return UNDERWEIGHT when bmi is 18.4', () => {
      const result = calculateBMI(50, 165)
      expect(result.category).toBe('UNDERWEIGHT')
      expect(result.bmi).toBe(18.4)
    })
    it('should return UNDERWEIGHT when bmi is 18.5', () => {
        const result = calculateBMI(50.3, 165)
        expect(result.category).toBe('NORMAL')
        expect(result.bmi).toBe(18.5)
      })
  })
describe('BMI boundary 22.9 | 23.0', () => {
    it('should return NORMAL when bmi is 22.9',() =>{
        const result = calculateBMI(66.2,170)
        expect(result.category).toBe('NORMAL')
        expect(result.bmi).toBe(22.9)
    })
    it('should return OVERWEIGHT when bmi is 23.0',() =>{
        const result = calculateBMI(66.5,170)
        expect(result.category).toBe('OVERWEIGHT')
        expect(result.bmi).toBe(23.0)
    })
})
describe('BMI boundary 24.9 | 25.0', () => {
    it('should return OVERWEIGHT when bmi is 24.9',() =>{
        const result = calculateBMI(72,170)
        expect(result.category).toBe('OVERWEIGHT')
        expect(result.bmi).toBe(24.9)
    })
    it('should return FAT LEVEL 1 when bmi is 25.0',() =>{
        const result = calculateBMI(72.3,170)
        expect(result.category).toBe('FAT LEVEL 1')
        expect(result.bmi).toBe(25.0)
    })
})
describe('BMI boundary 29.9 | 30.0', () => {
    it('should return FAT LEVEL 1 when bmi is 29.9',() =>{
        const result = calculateBMI(86.4,170)
        expect(result.category).toBe('FAT LEVEL 1')
        expect(result.bmi).toBe(29.9)
    })
    it('should return FAT DANGER when bmi is 30.0',() =>{
        const result = calculateBMI(86.7,170)
        expect(result.category).toBe('FAT DANGER')
        expect(result.bmi).toBe(30.0)
    })
})
describe('BMI not valid weight value less than 0 and more than 300',() =>{
    it('should throw error when weight less than 0', () => {
        expect(() => {
          calculateBMI(-0.1, 165)
        }).toThrow('please input weight in range 0 - 300')
    })
    it('should throw error when weight more than 300', () => {
        expect(() => {
            calculateBMI(300.1,165)
        }).toThrow('please input weight in range 0 - 300')
    }
    )
})
describe('BMI not valid height value less than 0 and more than 300',() =>{
    it('should throw error when height less than 0', () => {
        expect(() => {
          calculateBMI(50, -0.1)
        }).toThrow('please input height in range 0 - 300')
    })
    it('should throw error when height more than 300', () => {
        expect(() => {
            calculateBMI(50,300.1)
        }).toThrow('please input height in range 0 - 300')
    }
    )
})