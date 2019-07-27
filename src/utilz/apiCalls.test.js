import { postSign } from './apiCalls'
import { shallow } from enzyme;

describe('postUser', () => {
    let mockResponse;
    let sign;

    beforeEach(() => {
        sign = 'libra';
        mockResponse = {description: 'You\'ve been working hard. Treat yourself to a caramal macchiatto today.', color: 'gold', time: '7am'};
        window.fetch = jest.fn().mockImplementation(() => {
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({ mockResponse})
            })
        })
    })

    it('should be called with appropriate params', () => {
        
    })
})