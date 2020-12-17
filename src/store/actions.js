export const Actions = {
    SET_TITLE: 'SET_TITLE',
    TOGGLE_TITLE: 'TOGGLE_TITLE',
    ADD_LINK: 'ADD_LINK',
    REMOVE_LINK: 'REMOVE_LINK',
    TOGGLE_LINK: 'TOGGLE_LINK',
    UPDATE_lINK: 'UPDATE_lINK',
};

export const setTitle = title => ({
    type: Actions.SET_TITLE,
    payload: title,
});

export const toggleTitle = () => ({ type: Actions.TOGGLE_TITLE });

export const addLink = () => ({ type: Actions.ADD_LINK });

export const removeLink = id => ({ type: Actions.REMOVE_LINK, payload: id });

export const toggleLink = id => ({ type: Actions.TOGGLE_LINK, payload: id });

export const updateLink = (id, link) => ({ type: Actions.UPDATE_lINK, payload: { id, ...link } });
