import { useCanister } from "@connect2ic/react"
import React, { useEffect, useState } from "react"

function ICRC1() {
  const [counter] = useCanister("counter")

  const [inputValue, setInputValue] = useState("")

  async function handleButtonClick(value){
    if (value === "symbol") {
      setInputValue(await counter.symbol())
    } else if (value === "name") {
      let name = await counter.ledger.icrc1_symbol()
      setInputValue(name )
    } else if (value === "decimals") {
      setInputValue(counter.decimals())
    } else if (value === "fee") {
      setInputValue(counter.fee())
    } else if (value === "total_supply") {
      setInputValue(counter.total_supply())
    } else if (value === "transfer") {
      setInputValue(counter.transfer())
    } else if (value === "balance") {
      setInputValue(counter.balance())
    } else {
      setInputValue((prevValue) => prevValue + value)
    }
  }

 
  return (
    <div style={styles.calculator}>
      <input
        type="text"
        className="input-display"
        style={styles.inputDisplay}
        value={inputValue}
        readOnly
      />
      <div>
        <button
          className="button"
          style={styles.functionbutton}
          onClick={() => handleButtonClick("name")}
        >
          name
        </button>

        <button
          className="button"
          style={styles.functionbutton}
          onClick={() => handleButtonClick("symbol")}
        >
          symbol
        </button>

        <button
          className="button"
          style={styles.functionbutton}
          onClick={() => handleButtonClick("decimals")}
        >
          decimals
        </button>
      </div>

      <div>
        <button
          className="button"
          style={styles.functionbutton}
          onClick={() => handleButtonClick("fee")}
        >
          fee
        </button>

        <button
          className="button"
          style={styles.functionbutton}
          onClick={() => handleButtonClick("transfer")}
        >
          transfer
        </button>
        <button
          className="button"
          style={styles.functionbutton}
          onClick={() => handleButtonClick("balance")}
        >
          balance
        </button>

        
      </div>

      <div>
      <button
          className="button"
          style={styles.function1button}
          onClick={() => handleButtonClick("total_supply")}
        >
          total_supply
        </button>

        <button
          className="button"
          style={styles.function1button}
          onClick={() => handleButtonClick("minting_account")}
        >
          minting_account
        </button>
      </div>

      <div className="button" style={styles.button}>
        <button onClick={() => setInputValue("")}>Clear</button>
      </div>
    </div>
  )
}

const styles = {
  calculator: {
    width: "300px",
    margin: "0 auto",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    display: "inline-block",
    width: "50px",
    height: "50px",
    margin: "5px",
    padding: "10px",
    fontSize: "20px",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: "#eaeaea",
    border: "1px solid #ccc",
  },
  inputDisplay: {
    width: "100%",
    marginBottom: "30px",
    padding: "2px",
    fontSize: "40px",
    textAlign: "right",
    border: "1px solid #ccc",
    borderRadius: "3px",
  },
  functionbutton: {
    display: "inline-block",
    width: "80px",
    height: "50px",
    margin: "5px",
    padding: "10px",
    fontSize: "13px",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: "#eaeaea",
    border: "1px solid #ccc",
  },
  function1button: {
    display: "inline-block",
    width: "120px",
    height: "50px",
    margin: "5px",
    padding: "10px",
    fontSize: "12px",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: "#eaeaea",
    border: "1px solid #ccc",
  },
}

export { ICRC1 }
