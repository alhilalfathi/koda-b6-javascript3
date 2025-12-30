const temperature = {
    base: 10,
    toFahrenheit: function(){
        // console.log(`${this.base}`)
        return this.base * (9/5) + 32
    },
    toKelvin: function(){
        return this.base + 273.15
    },
    toReamur: function(){
        return this.base * (4/5)
    }
}
console.log(temperature.base)
console.log(temperature.toFahrenheit())
console.log(temperature.toKelvin())
console.log(temperature.toReamur())