export const logger = (_store:any) => (next:any) => (action:any) => {
    next(action)
}

export const featuring = (_store:any) => (next:any)  => (actionInfo:any) => {
    const featured = [{ name: "eddie" }, ...actionInfo.action.payload]
    const updateActionInfo = {
        ...actionInfo, 
        action: {
            ...actionInfo.action,
            payload: featured
        }
    }
    next(updateActionInfo)
}