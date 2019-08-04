export function isEmptyObject(obj) {
    if (obj === null || obj === undefined) return true
    return (Object.getOwnPropertyNames(obj).length === 0);
}
export function stateStep(step, currentState, color) {
    //Activa el paso actual.
    if (step === currentState)
        return ` is-active ${color}`
    if (step < currentState)
        return ` is-completed ${color}`
    else
        return ""
}
