const BigNumber = web3.BigNumber;
const NFT = artifacts.require('NFT');

require('chai')
    .use(require('chai-bignumber')(BigNumber))
    .should();

contract('NFT', accounts => {
    const _date = 'datestamp';
    const _price = 100;
    const _copy = 1;
    
    beforeEach(async function() {
        this.token = await NFT.new(_date, _price, _copy);
    });

    describe ('token attributes', function(){
        it('has the correct datestamp', async function(){
            
        });
        it('has the correct price', async function(){

        });
        it('has the correct number of copies', async function(){

        });

    });

});