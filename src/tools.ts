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

    if (transfers > 4 && transfers < 10 || transfers === 0) {
        return 'ок'
    }
}