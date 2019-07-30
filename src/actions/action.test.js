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

    });

    it('should have a type of HAS_ERRORED', () => {

    });

    it('should have a type of SET_VERDICT', () => {

    })
})