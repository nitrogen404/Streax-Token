import React from "react";

function Transactions() {
	const ethkey = process.env['etherscankey'];
    let results = []
    const getTransactions = async() => {
    
    const url = 'https://api-goerli.etherscan.io/api?module=account&action=txlist&address=0xF83C612381B04d06B1929fdAeb00F6977c22363e&page=1&offset=10&sort=asc&apikey='+ethkey; 
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => (data['result'].forEach(element => {
      results.push({
        from: element.from, 
        to: element.to,
        timestamp: new Date(element.timeStamp * 1000),
        hash: element.hash 
      })
    
    console.log(results)
    })));
    
    }

    return (
        <div>
            <button className="gettxns" onClick={getTransactions}>Get transactions</button>
            <div className="table">
                <table>
                <thead>
                    <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Time</th>
                    <th>Transaction Hash</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result) => {
                    return (

                        <tr key={result.from}>
                        {result.from}
                        {result.to}
                        {result.timestamp}
                        </tr>
                        
                    )
                    })}
                </tbody>
                </table>
            </div>
        </div>
        
    )
}

export default Transactions;