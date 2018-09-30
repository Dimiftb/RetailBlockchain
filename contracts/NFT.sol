pragma solidity ^0.4.24;

import {ERC721Token} from "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import {Ownable} from "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract NFT is ERC721Token, Ownable {

    string public constant tokenName = "GoshoByteMe";
    string public constant tokenSymbol = "GLIDHPD";
    // address of the admin (creator of the token)
    address public adaptAdmin;

        // general structure of all tokens
        struct TokenMetadata {
        //time created
		uint timestamp;
		uint price;
        //how many unique tokens exist
		uint copy;
    }

	// Optional mapping for token metadata
	mapping(uint => TokenMetadata) internal metadata;


    //takes as params the owner address and admin address
    constructor(address _adaptOwner,address _adaptAdmin) 
    public ERC721Token(tokenName, tokenSymbol) {

		adaptAdmin = _adaptAdmin;
		transferOwnership(_adaptOwner);
    }

    //before executing a function, check if the executer is authorised (the admin)
    modifier onlyAdmin() {
		require(msg.sender == adaptAdmin);
		_;
    }

    //creates a new token
    //_to -> address of beneficiary
    //_jsonHash -> the hash created from all the data related to the particular token
    //_copy -> number of particular tokens
    function mint(address _to, string _jsonHash, uint _copy) 
    public onlyAdmin {
    //generate unique tokenId from the _jsonHash and _copy
        uint tokenId = uint(keccak256(abi.encodePacked(_jsonHash, _copy)));
        //call ERC721Token's function mint to create the token
        super._mint(_to, tokenId);
        //deposit the _jsonHash to the specific token
        super._setTokenURI(tokenId, _jsonHash);

        metadata[tokenId].copy = _copy;
    }

    //deposit the _jsonHash to the specific token
    function setTokenURI(uint _tokenId, string _uri) public onlyAdmin {
        super._setTokenURI(_tokenId, _uri);
    }

    function setTokenMetadata(uint _tokenId, uint _timestamp, uint _price) public {
        TokenMetadata storage tm = metadata[_tokenId];

        // this can be done once only
        require(tm.timestamp == 0 && tm.price == 0);

        // update the metadata structure
        metadata[_tokenId].timestamp = _timestamp;
        metadata[_tokenId].price = _price;
    }

    function getTokenMetadata(uint _tokenId) public view
        returns (
            uint timestamp,
            uint price,
            uint copy) {

        require(exists(_tokenId));
        TokenMetadata storage tm = metadata[_tokenId];
        return (
            tm.timestamp,
            tm.price,
            tm.copy
        );
    }
}