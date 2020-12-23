export const Actions = {
    UPDATE_IMAGE: 'UPDATE_IMAGE',
    REMOVE_IMAGE: 'REMOVE_IMAGE',
    TOGGLE_IMAGE: 'TOGGLE_IMAGE',
    TOGGLE_IMAGE_FORMAT: 'TOGGLE_IMAGE_FORMAT',
    TOGGLE_IMAGE_BORDER: 'TOGGLE_IMAGE_BORDER',
    SET_TITLE: 'SET_TITLE',
    TOGGLE_TITLE: 'TOGGLE_TITLE',
    SET_BIO: 'SET_BIO',
    TOGGLE_BIO: 'TOGGLE_BIO',
    ADD_LINK: 'ADD_LINK',
    REMOVE_LINK: 'REMOVE_LINK',
    TOGGLE_LINK: 'TOGGLE_LINK',
    UPDATE_LINK: 'UPDATE_LINK',
    SET_THEME: 'SET_THEME',
    IMPORT_DATA: 'IMPORT_DATA',
};

// IMAGE
export const updateImage = (url, replaceOriginal = true) => ({
    type: Actions.UPDATE_IMAGE,
    payload: { url, replaceOriginal },
});
export const removeImage = () => ({ type: Actions.REMOVE_IMAGE });
export const toggleImage = () => ({ type: Actions.TOGGLE_IMAGE });
export const toggleImageFormat = () => ({ type: Actions.TOGGLE_IMAGE_FORMAT });
export const toggleImageBorder = () => ({ type: Actions.TOGGLE_IMAGE_BORDER });

// BIO
export const setBio = bio => ({ type: Actions.SET_BIO, payload: bio });
export const toggleBio = () => ({ type: Actions.TOGGLE_BIO });

// TITLE
export const setTitle = title => ({
    type: Actions.SET_TITLE,
    payload: title,
});
export const toggleTitle = () => ({ type: Actions.TOGGLE_TITLE });

// LINKS
export const addLink = () => ({ type: Actions.ADD_LINK });
export const removeLink = id => ({ type: Actions.REMOVE_LINK, payload: id });
export const toggleLink = id => ({ type: Actions.TOGGLE_LINK, payload: id });
export const updateLink = (id, link) => ({ type: Actions.UPDATE_LINK, payload: { id, ...link } });

// THEME
export const setTheme = theme => ({ type: Actions.SET_THEME, payload: theme });

// IMPORT
export const importData = data => ({ type: Actions.IMPORT_DATA, payload: data });
