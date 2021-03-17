export function changeName(name = 'Pokemon Hunter') {
    return {
        type: "CHANGE_NAME",
        payload: name
    }
}

export default function nameReducer(name = 'Pokemon Hunter', action) {
    switch (action.type) {
        case "CHANGE_NAME":
            return {

            }
        default:
            return name
    }
}
