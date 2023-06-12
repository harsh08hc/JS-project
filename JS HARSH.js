/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?  => array
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Create a variable to hold your NFT's
const NFTs = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, description, image) {
	const nft = { name, description, image };
	NFTs.push(nft);
}

// Create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
	NFTs.forEach((nft) => {
		console.log('Name: ' + nft.name);
		console.log('Description: ' + nft.description);
		console.log('Image: ' + nft.image + '\n');
	});
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
	console.log('Total Supply: ' + NFTs.length);
}

// Call your functions below this line
mintNFT('NFT 1', 'Description 1', 'image1.jpg');
mintNFT('NFT 2', 'Description 2', 'image2.jpg');
mintNFT('NFT 3', 'Description 3', 'image3.jpg');

listNFTs();

getTotalSupply();
