import { postSign } from './apiCalls'
// import { shallow } from 'enzyme';

describe('postSign', () => {
    let mockResponse;

    beforeEach(() => {
        mockResponse = {description: 'You\'ve been working hard. Treat yourself to a caramal macchiatto today.', color: 'gold', time: '7am'};
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse)
            })
        })
    });

    it('should be called with appropriate params', () => {
        const expected = [`https://aztro.sameerkumar.website/?sign=undefined&day=today`,
            { method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: '{}'
         }
    ]
        postSign();
        expect(window.fetch).toHaveBeenCalledWith(...expected)
    });

    it('HAPPY: should return a response if status is ok', async () => {
        const result = await postSign();
        expect(result).toEqual(mockResponse)
    });

    it('SAD: should return an error if status is not ok', () => {
        window.fetch = jest.fn().mockImplementationOnce(() => {
            return Promise.resolve({
                ok: false
            })
        })
        
        expect(postSign()).rejects.toEqual('Something went wrong... but we\'ll give you a do-over.')
    })
})