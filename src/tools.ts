export const getTransfers = (transfers: number) => {
    if (transfers === 1) {
        return 'a'
    }

    if (transfers > 1 && transfers < 5) {
        return 'и'
    }

    if (transfers > 1 && transfers < 5) {
        return 'и'
    }

    if ((transfers > 4 && transfers < 10) || (transfers === 0)) {
        return 'ок'
    }
}

export const getPrice = (price: number) => {

    const fixedPrice: string[] =[]
    const number: string[] = price.toString().split('').reverse()
    for (let i = 0; i < number.length; i += 3) {
        const chunk = number.slice(i, i + 3);
        fixedPrice.push(chunk.reverse().join(''));
    }

    return fixedPrice.reverse().join(' ');
}

