export function changeCaughtStatus(caught = false) {
    return {
        type: "CHANGE_CAUGHT_STATUS"
    }
}

export default function caughtReducer(caught = false, action) {
    switch (action.type) {
        case "CHANGE_CAUGHT_STATUS":
            return !caught
        default:
            return caught
    }
}
