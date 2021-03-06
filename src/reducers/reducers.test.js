import { userReducer } from './userReducer'
import { errorReducer } from './errorReducer';
import { verdictReducer } from './verdictReducer';

describe('userReducer', () => {
    it('should return initial state', () => {
        const expected = {};

        const result = userReducer(undefined, {});

        expect(result).toEqual(expected)
    });

    it('should update the user with SET_USER', () => {
        const state = {};

        const user = {
            name: 'Tay',
            sign: 'Aries',
            description: 'Suns out, guns out. Get your pool and your workout on, today\'s a great day for it',
            color: 'orange'
        }

        const action = {
            type: 'SET_USER',
            user
        }

        const expected = {
                name: 'Tay',
                sign: 'Aries',
                description: 'Suns out, guns out. Get your pool and your workout on, today\'s a great day for it',
                color: 'orange'
        }

        const result = userReducer(state, action);
        expect(result).toEqual(expected);

    });

    it('should reset state with CLEAR_USER', () => {
        const state = {
            name: 'Tay',
            sign: 'Aries',
            description: 'Suns out, guns out. Get your pool and your workout on, today\'s a great day for it',
            color: 'orange'
        }

        const action = {
            type: 'CLEAR_USER'
        }

        const expected = {}

        const result = userReducer(state, action);
        expect(result).toEqual(expected)

    });
})

describe('errorReducer', () => {
    it('should return initial state', () => {
        const expected = '';

        const result = errorReducer(undefined, '');

        expect(result).toEqual(expected);
        
    });

    it('should return an error with HAS_ERRORED', () => {
        const state = '';

        const errorMsg = {error: 'Sorry, stars not aligned'};

        const action = {
            type: 'HAS_ERRORED',
            errorMsg
        }

        const expected = {error: 'Sorry, stars not aligned'}

        const result = errorReducer(state, action)

        expect(result).toEqual(expected)

    });
})

describe('verdictReducer', () => {
    it('should return initial state', () => {
        const expected = '';

        const result = verdictReducer(undefined, '');

        expect(result).toEqual(expected);
    });

    it('should set the verdict with SET_VERDICT', () => {
        const state = ''

        const status = 'positive';

        const action = {
            type: 'SET_VERDICT',
            status
        }

        const expected = 'positive'

        const result = verdictReducer(state, action)

        expect(result).toEqual(expected)

    })
})