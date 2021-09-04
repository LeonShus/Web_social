export const getProfileInfoSelector = (state) => {
    return state.profilePage.profileInfo
}

export const getProfileStatusSelector = (state) => {
    return state.profilePage.profileStatus
}

export const getAuthorizeUserId = (state) => {
    return state.authUser.id
}