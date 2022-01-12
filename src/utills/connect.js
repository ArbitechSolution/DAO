import Web3 from 'web3';
const getAccounts = async () => {
    const web3 = window.web3;
    try {
       let accounts = await web3.eth.getAccounts();
        return accounts;
    } catch (error) {
        console.log("Error while fetching acounts: ", error);
        return null;
    }
};
export const loadAccountAddress = async () => {
    let acc;
    let isConnected = false;
    try {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
           await window.web3.eth.getChainId((err, netId) => {
                console.log("networkId==>", netId);
                switch (netId.toString()) {
                  case "97":
                    console.log("This is mainnet");
                    isConnected=true;
                    console.log(isConnected);
                    // jQuery("#network").text("This is mainnet");
                    // Accounttype = "1";
                    // network = "mainnet";
                    isConnected=true;
                    break;
                  default:
                    console.log("This is an unknown network.");
                    // return "Wrong Network"
                    // jQuery("#network").text("This is the unknown test network.");
                }
                
                
              }
             );
             if (isConnected == true) {    
                let accounts = await getAccounts();
                return accounts[0];
               
                // acc = accountAd.substring(0, 6) + "..." + accountAd.substring(accountAd.length - 6)
                //   setAccount(acc);
                
                
            }
        } else {
            console.log("wallet connected to the incorrect netowork");
        }
        if (isConnected == true) {    
            let accounts = await getAccounts();
            return accounts[0];
           
            // acc = accountAd.substring(0, 6) + "..." + accountAd.substring(accountAd.length - 6)
            //   setAccount(acc);
            
            
        }
        console.log(isConnected);   
                
       
    } catch (error) {
        return false
        // console.log("Error while connecting metamask", error);
    }
};