import { Actions } from './actions';
import { v4 as uuid } from 'uuid';

const updateImage = (state, payload) => ({
    ...state,
    image: {
        ...state.image,
        src: payload,
        show: true,
    },
});

const removeImage = state => ({
    ...state,
    image: {
        ...state.image,
        src: 'https://www.gravatar.com/avatar/0?d=mp&size=120',
        show: false,
    },
});

const toggleImage = state => ({
    ...state,
    image: {
        ...state.image,
        show: !state.image.show,
    },
});

const toggleImageFormat = state => ({
    ...state,
    image: {
        ...state.image,
        show: true,
        circle: !state.image.circle,
    },
});

const toggleImageBorder = state => ({
    ...state,
    image: {
        ...state.image,
        show: true,
        border: !state.image.border,
    },
});

const setTitle = (state, payload) => ({
    ...state,
    title: {
        ...state.title,
        text: payload,
    },
});

const toggleTitle = state => ({
    ...state,
    title: {
        ...state.title,
        show: !state.title.show,
    },
});

const setBio = (state, payload) => ({
    ...state,
    bio: {
        show: true,
        text: payload,
    },
});

const toggleBio = state => ({
    ...state,
    bio: {
        ...state.bio,
        show: !state.bio.show,
    },
});

const addLink = state => {
    const id = uuid();
    const order =
        Object.values(state.links)
            .map(({ order }) => order)
            .reduce((a, b) => Math.max(a, b), 0) + 1;

    return {
        ...state,
        links: {
            ...state.links,
            [id]: {
                text: 'My Link',
                href: 'https://google.com/',
                show: true,
                order,
            },
        },
    };
};

const removeLink = (state, payload) => {
    const copy = { ...state.links };
    delete copy[payload];

    return {
        ...state,
        links: copy,
    };
};

const toggleLink = (state, payload) => {
    const link = state.links[payload];
    return {
        ...state,
        links: {
            ...state.links,
            [payload]: {
                ...link,
                show: !link.show,
            },
        },
    };
};

const updateLink = (state, payload) => {
    const { id, ...link } = payload;
    return {
        ...state,
        links: {
            ...state.links,
            [id]: {
                ...state.links[id],
                ...link,
            },
        },
    };
};

const setTheme = (state, theme) => ({ ...state, theme });

export default (state, { type, payload }) => {
    switch (type) {
        case Actions.UPDATE_IMAGE:
            return updateImage(state, payload);
        case Actions.REMOVE_IMAGE:
            return removeImage(state);
        case Actions.TOGGLE_IMAGE:
            return toggleImage(state);
        case Actions.TOGGLE_IMAGE_FORMAT:
            return toggleImageFormat(state);
        case Actions.TOGGLE_IMAGE_BORDER:
            return toggleImageBorder(state);
        case Actions.SET_TITLE:
            return setTitle(state, payload);
        case Actions.TOGGLE_TITLE:
            return toggleTitle(state);
        case Actions.SET_BIO:
            return setBio(state, payload);
        case Actions.TOGGLE_BIO:
            return toggleBio(state);
        case Actions.ADD_LINK:
            return addLink(state);
        case Actions.REMOVE_LINK:
            return removeLink(state, payload);
        case Actions.TOGGLE_LINK:
            return toggleLink(state, payload);
        case Actions.UPDATE_LINK:
            return updateLink(state, payload);
        case Actions.SET_THEME:
            return setTheme(state, payload);
        default:
            throw new Error();
    }
};
