import { postSign, getEmotion } from './apiCalls'
import { apiKey } from './apiKey'

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
        
        expect(postSign()).rejects.toEqual(Error('Something went wrong... but we\'ll give you a do-over.'))
    })
})

describe('getEmotion', () => {
    let mockResponse;

    beforeEach(() => {
        mockResponse = {
            "time": 0,
            "sentiment": {
                "type": "negative",
                "score": -0.4666666666666667
            },
            "lang": "en",
            "timestamp": "2019-07-29T04:57:37.889"
        }

        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse)
            })
        })
    });

    it('should call fetch with correct url', () => {
        const message = undefined;
        const expected = `https://api.dandelion.eu/datatxt/sent/v1/?lang=en&text=${message}&token=${apiKey}`;

        getEmotion();
        expect(window.fetch).toHaveBeenCalledWith(expected)
    });

    it('HAPPY: should return a response if status is ok', async () => {
        const parsed = mockResponse.sentiment.type;
        const result = await getEmotion();

        expect(result).toEqual(parsed);
    });

    it('SAD: should throw an error if status is not ok', () => {
        window.fetch = jest.fn().mockImplementationOnce(() => {
            return Promise.resolve({
                ok: false
            })
        })

        expect(getEmotion()).rejects.toEqual(Error('Having trouble reading you today...'))
    })
})