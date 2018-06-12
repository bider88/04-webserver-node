const hbs = require('hbs')

hbs.registerHelper('getAnio', () => new Date().getFullYear())

hbs.registerHelper('capitalize', srt => {
    let words = srt.split(' ')
    words.forEach((word, i) => {
        words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })

    return words.join(' ')
})
