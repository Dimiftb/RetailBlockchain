
// App = {
//     web3Provider: null,
//     contracts: {},
//     account: '0x0',
//     hasVoted: false,
  
//     init: function() {
//       return App.initWeb3();
//     },
  
//     initWeb3: function() {
//       // TODO: refactor conditional
//       if (typeof web3 !== 'undefined') {
//         // If a web3 instance is already provided by Meta Mask.
//         App.web3Provider = web3.currentProvider;
//         web3 = new Web3(web3.currentProvider);
//       } else {
//         // Specify default instance if no web3 instance provided
//         App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
//         web3 = new Web3(App.web3Provider);
//       }
//       return App.initContract();
//     },
  
//     initContract: function() {
//       $.getJSON("NFT.json", function(NFT) {
//         // Instantiate a new truffle contract from the artifact
//         App.contracts.NFT = TruffleContract(NFT);
//         // Connect provider to interact with contract
//         App.contracts.NFT.setProvider(App.web3Provider);
  
//         App.listenForEvents();
  
//         return App.render();
//       });
//     },
  
//     // Listen for events emitted from the contract
//     listenForEvents: function() {
//       App.contracts.NFT.deployed().then(function(instance) {
//         // Restart Chrome if you are unable to receive this event
//         // This is a known issue with Metamask
//         // https://github.com/MetaMask/metamask-extension/issues/2393
//         instance.votedEvent({}, {
//           fromBlock: 0,
//           toBlock: 'latest'
//         }).watch(function(error, event) {
//           console.log("event triggered", event)
//           // Reload when a new vote is recorded
//           App.render();
//         });
//       });
//     },
  
//     render: function() {
//       var NFTInstance;
//       var loader = $("#loader");
//       var content = $("#content");
  
//       loader.show();
//       content.hide();
  
//       // Load account data
//       web3.eth.getCoinbase(function(err, account) {
//         if (err === null) {
//           App.account = account;
//           $("#accountAddress").html("Your Account: " + account);
//         }
//       });
  
//       // Load contract data
//       App.contracts.NFT.deployed().then(function(instance) {
//         NFTInstance = instance;
//         return NFTInstance.candidatesCount();
//       }).then(function(candidatesCount) {
//         var candidatesResults = $("#candidatesResults");
//         candidatesResults.empty();
  
//         var candidatesSelect = $('#candidatesSelect');
//         candidatesSelect.empty();
  
//         for (var i = 1; i <= candidatesCount; i++) {
//           NFTInstance.candidates(i).then(function(candidate) {
//             var id = candidate[0];
//             var name = candidate[1];
//             var voteCount = candidate[2];
  
//             // Render candidate Result
//             var candidateTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + voteCount + "</td></tr>"
//             candidatesResults.append(candidateTemplate);
  
//             // Render candidate ballot option
//             var candidateOption = "<option value='" + id + "' >" + name + "</ option>"
//             candidatesSelect.append(candidateOption);
//           });
//         }
//         return NFTInstance.voters(App.account);
//       }).then(function(hasVoted) {
//         // Do not allow a user to vote
//         if(hasVoted) {
//           $('form').hide();
//         }
//         loader.hide();
//         content.show();
//       }).catch(function(error) {
//         console.warn(error);
//       });
//     },
  
//     castVote: function() {
//       var candidateId = $('#candidatesSelect').val();
//       App.contracts.NFT.deployed().then(function(instance) {
//         return instance.vote(candidateId, { from: AppA.account });
//       }).then(function(result) {
//         // Wait for votes to update
//         $("#content").hide();
//         $("#loader").show();
//       }).catch(function(err) {
//         console.error(err);
//       });
//     }
//   };
  
//   $(function() {
//     $(window).load(function() {
//       App.init();
//     });
//   });
  
var NFT =[
    {
      "constant": true,
      "inputs": [
        {
          "name": "_interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "InterfaceId_ERC165",
      "outputs": [
        {
          "name": "",
          "type": "bytes4"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "exists",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenName",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "adaptAdmin",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenSymbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_adaptOwner",
          "type": "address"
        },
        {
          "name": "_adaptAdmin",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_jsonHash",
          "type": "string"
        },
        {
          "name": "_copy",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "_uri",
          "type": "string"
        }
      ],
      "name": "setTokenURI",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "_timestamp",
          "type": "uint256"
        },
        {
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "setTokenMetadata",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getTokenMetadata",
      "outputs": [
        {
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "name": "price",
          "type": "uint256"
        },
        {
          "name": "copy",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
var BigNumber = web3.BigNumber;
var Web3 = require ('web3');
web3 = new Web3(window.web3.currentProvide);
var instance = web3.eth.contract(NFT , '0xf5cf41a83bc6d5ec0f17852b4a0ae4260ff543d7');
console.log(instance);
function mint (_jsonHash,_copy){
    var _toAddress = 'f5cf41a83bc6D5ec0F17852B4a0Ae4260Ff543D7';
    var lqlq = 0xf5cf41a83bc6D5ec0F17852B4a0Ae4260Ff543D7
   // var mqmq = hex(lqlq).lstrip("0x");
    
  
    console.log(_toAddress);
    var huq = new BigNumber(lqlq);
   
    console.log(huq);
    var pls = _toAddress.toString();

    // var collectibles = instance.new(lqlq.valueOf,lqlq.valueOf);
    // collectibles.mint(lqlq.valueOf,_jsonHash,_copy);    
}

//App.contracts.NFT.deployed().then(function(instance){console.log(instance)});