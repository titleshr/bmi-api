function getBMICategory(bmi) {
    if (bmi < 18.5) return 'UNDERWEIGHT';
    if (bmi <= 22.9) return 'NORMAL';
    if (bmi <= 24.9) return 'OVERWEIGHT';
    if (bmi <= 29.9) return 'FAT LEVEL 1';
    return 'FAT DANGER';
}
function calculateBMI(weight,height){
    if (weight < 0 || weight > 300 || weight == false){
        throw new Error('please input weight in range 0 - 300')
    }
    if (height < 0 || height > 300 || weight == false){
        throw new Error('please input height in range 0 - 300')
    }
    const bmi = Number((weight/((height/100)**2)).toFixed(1));
    const text = getBMICategory(bmi)

    return {bmi,category:text};
}
  
  module.exports = { calculateBMI }
  