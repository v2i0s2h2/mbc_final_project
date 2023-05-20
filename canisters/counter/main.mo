import Float "mo:base/Float";
import Int "mo:base/Int";
import Result "mo:base/Result";
import PT "public_type";
import Principal "mo:base/Principal";

actor {
    // Step 1 -  Define a mutable variable called `counter`.
    stable var counter : Float = 0;
    // Step 2 - Implement add
    public func add(x : Float) : async Float {
        counter += x;
        counter
    };

    // Step 3 - Implement sub
    public func sub(x : Float) : async Float {
        counter -= x;
        counter
    };

    // Step 4 - Implement mul
    public func mul(x : Float) : async Float {
        counter *= x;
        counter
    };

    // Step 5 - Implement div
    public func div(x : Float) : async ?Float {
        if (x == 0) {
            null
        } else {
            counter /= x;
            ?counter
        }
    };

    // Step 6 - Implement reset
    public func reset() : async () {
        counter := 0
    };

    // Step 7 - Implement query
    public query func see() : async Float {
        counter
    };

    // Step 8 - Implement power
    public func power(x : Float) : async Float {
        counter **= x;
        counter
    };

    // Step 9 - Implement sqrt
    public func sqrt() : async Float {
        Float.sqrt(counter)
    };

    // Step 10 - Implement floor
    public func floor() : async Int {
        Float.toInt(Float.floor(counter))
    };


    //////////////////////////////////////////////////////////////////


  type Timestamp = PT.Timestamp;
  type Duration = PT.Duration;
  type Account = PT.Account;
  type Subaccount = PT.Subaccount;
  type Value = PT.Value;
  type TransferArgs = PT.TransferArgs;
  type TransferError = PT.TransferError;
  type Result<Ok, Err> = Result.Result<Ok, Err>;

  type ICRC1_Interface = actor {
    // Ledger functionality
    icrc1_balance_of : shared query (Account) -> async (Nat);
    icrc1_transfer : shared(TransferArgs) -> async (Result<Nat, TransferError>);
  };

  let ledger = actor ("ryjl3-tyaaa-aaaaa-aaaba-cai") : ICRC1_Interface;

  // General token info

  
  // Ledger functionality

  let account2 : Account = {
    owner = Principal.fromText("ud6i4-iaaaa-aaaab-qadiq-cai");
    subaccount = null;
  };

  let amount : Nat = 919999;

  public func transfer() : async Result<Nat, TransferError> {
    
    let arg : TransferArgs = {
      from_subaccount = null;
      to = account2;
      amount;
      fee = ?10000;
      memo = null;
      created_at_time = null;

    };
    await ledger.icrc1_transfer(arg);
  };

  public func balance() : async Nat {

    let account : Account = {
      owner = Principal.fromActor(ledger);
      subaccount = null;
    };

    await ledger.icrc1_balance_of(account);
  };


}
