

var expect = chai.expect;

describe('New Deck', function() {
        it('Should throw error if first parameter is not a string', function() {
            let deck = [];
            let testArray = deck;

            expect(function() {
                testArray(2, 3);
            }).to.throw(Error);
        });
    });


