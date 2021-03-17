export function changeCardsNumber(amount = 14) {
    return {
        type: "CHANGE_CARDS_NUMBER",
        payload: amount
    }
}

export default function cardsReducer(count = 14, action) {
    switch (action.type) {
        case "CHANGE_CARDS_NUMBER":
            return count + action.payload
        default:
            return count
    }
}
