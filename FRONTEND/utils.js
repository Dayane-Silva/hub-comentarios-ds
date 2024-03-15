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

function randomColor(colors) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function darkColors() { 
    let darkPalette = ['#5a1d55', '#83447e','#ad6aa6', '#542251', '#bc3d72'];
    return randomColor(darkPalette);
    console.log(darkColors());
}

function lightColors() {
    let lightPalette = ['#d691cf', '##ffb8f7', '##d095c9','#f7e6f4', '#ff9fd0'];
    return randomColor(lightPalette);
    console.log(lightColors());
}


export { formatDate, darkColors, lightColors }

