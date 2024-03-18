// utils.js

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



function randomColor(vetorColor) {
    const index = Math.floor(Math.random()*3);
    return vetorColor[index];
}

function darkColor() {
    let darkPalete= ['5a1d55', '83447e','ad6aa6', '542251', 'bc3d72']
    return randomColor(darkPalete) ;
}

function lightColor() {
    let lightPalete= ['d691cf', 'ffb8f7', 'd095c9','f7e6f4', 'ff9fd0']
    return randomColor(lightPalete) ;
}


export {formatDate, lightColor, darkColor}
