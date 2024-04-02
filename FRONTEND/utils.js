const formatDate = (data) => {
    const currentDate = new Date(data);
    const options = {
        day: '2-digit',
        month: 'short',
        hour: 'numeric',
        hour12: false
    };

    let formattedDate = currentDate.toLocaleDateString('pt-BR', options)
    return formattedDate.replace(',', ' às') + 'hs';
}

const randomInt = (value) => {
    return Math.floor(Math.random() * value)
}

const randomColors = () => {
    let darkPalette = ['8A2BE2', '430372', '3C0366', '38055D', '7F00FF']
    let lightPalette = ['9583B6','A087CD', '9C82CB', '9377C6', '8B5BE4']

    let colors = []
    colors.push(darkPalette)
    colors.push(lightPalette)

    return {
        dark: colors[0][randomInt(colors[0].length)],
        light: colors[1][randomInt(colors[1].length)]
    }
}

export { formatDate, randomColors }