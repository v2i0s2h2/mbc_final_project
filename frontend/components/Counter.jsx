import { useCanister } from "@connect2ic/react"
import React, { useEffect, useState } from "react"

function Counter() {
  const [counter] = useCanister("counter")

  const [inputValue, setInputValue] = useState("")


  const handleButtonClick = (value) => {
    if (value === "√") {
      setInputValue(`√(${inputValue})`)
    } else if (value === 'Floor') {
      setInputValue(Math.floor(eval(inputValue)).toString())
    } else if (value === "^") {
      setInputValue(`${inputValue}^`)
    } else {
      setInputValue((prevValue) => prevValue + value)
    }
  }

  const calculateResult = () => {
    try {
      let result
      if (inputValue.includes("√")) {
        const operand = inputValue.slice(2, inputValue.length - 1)
        result = Math.sqrt(Number(operand))
      } else if (inputValue.includes("^")) {
        const parts = inputValue.split("^")
        const base = parts[0]
        const exponent = parts[1]
        result = Math.pow(Number(base), Number(exponent))
      } else {
        result = eval(inputValue) // Using eval for simplicity, but be cautious with user input
      }
      setInputValue(result.toString())
    } catch (error) {
      setInputValue("Error")
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
          style={styles.button}
          onClick={() => handleButtonClick("7")}
        >
          7
        </button>
        <button
          className="button"
          style={styles.button}
          onClick={() => handleButtonClick("8")}
        >
          8
        </button>
        <button
          className="button"
          style={styles.button}
          onClick={() => handleButtonClick("9")}
        >
          9
        </button>
        <button
          className="button"
          style={styles.button}
          onClick={() => handleButtonClick("+")}
        >
          +
        </button>
        <button
          className="button"
          style={styles.button}
          onClick={() => handleButtonClick("^")}
        >
          ^
        </button>
      </div>
      <div>
        <button
          className="button"
          style={styles.button}
          onClick={() => handleButtonClick("4")}
        >
          4
        </button>
        <button
          className="button"
          style={styles.button}
          onClick={() => handleButtonClick("5")}
        >
          5
        </button>
        <button
          className="button"
          style={styles.button}
          onClick={() => handleButtonClick("6")}
        >
          6
        </button>
        <button
          className="button"
          style={styles.button}
          onClick={() => handleButtonClick("-")}
        >
          -
        </button>
        <button
          className="button"
          style={styles.button}
          onClick={() => handleButtonClick("√")}
        >
          √
        </button>
      </div>
      <div>
        <button
          className="button"
          style={styles.button}
          onClick={() => handleButtonClick("1")}
        >
          1
        </button>
        <button
          className="button"
          style={styles.button}
          onClick={() => handleButtonClick("2")}
        >
          2
        </button>
        <button
          className="button"
          style={styles.button}
          onClick={() => handleButtonClick("3")}
        >
          3
        </button>
        <button
          className="button"
          style={styles.button}
          onClick={() => handleButtonClick("*")}
        >
          *
        </button>
        <button
          className="button"
          style={styles.floorbutton}
          onClick={() => handleButtonClick("Floor")}
        >
          Floor
        </button>
      </div>
      <div>
        <button
          className="button"
          style={styles.button}
          onClick={() => handleButtonClick("0")}
        >
          0
        </button>
        <button
          className="button"
          style={styles.button}
          onClick={() => handleButtonClick(".")}
        >
          .
        </button>
        <button
          className="button"
          style={styles.button}
          onClick={calculateResult}
        >
          =
        </button>
        <button
          className="button"
          style={styles.button}
          onClick={() => handleButtonClick("/")}
        >
          /
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
  floorbutton: {
    display: "inline-block",
    width: "50px",
    height: "50px",
    margin: "5px",
    padding: "10px",
    fontSize: "15px",
    marginright: "10px",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: "#eaeaea",
    border: "1px solid #ccc",
  },
}

export { Counter }
