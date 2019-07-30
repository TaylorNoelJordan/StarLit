import {setUser, clearUser, hasErrored, setVerdict } from './index';

describe('actions', () => {
    it('should have a type of SET_USER', () => {
        const user = {
            description: 'Face mask and top knot',
            color: 'gold',
            mood: 'chill',
            time: '3pm'
        };

        const expectedAction = {
            type: 'SET_USER',
            user
        };

        const result = setUser(user);

        expect(result).toEqual(expectedAction);
    });

    it('should have a type of CLEAR_USER', () => {
        const expectedAction = {
            type: 'CLEAR_USER'
        }

        const result = clearUser();
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of HAS_ERRORED', () => {
        const errorMsg = 'Sorry, the stars have not aligned'

        const expectedAction = {
            type: 'HAS_ERRORED',
            errorMsg
        }

        const result = hasErrored(errorMsg);

        expect(result).toEqual(expectedAction)

    });

    it('should have a type of SET_VERDICT', () => {
        const status = 'positive';

        const expectedAction = {
            type: 'SET_VERDICT',
            status
        }

        const result = setVerdict(status)

        expect(result).toEqual(expectedAction)

    })
})