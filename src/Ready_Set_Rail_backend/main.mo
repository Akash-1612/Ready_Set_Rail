import Text "mo:base/Text";
import Array "mo:base/Array";



actor {
  let list : [Text] = [
    "12903 RAJDHANI EXPRESS",
    "12021 SHATABDI EXPRESS",
    "09102 VANDE BHARAT EXPRESS",
    "18542 TEJAS RAJDHANI EXPRESS",
    "19752 DURONTO EXPRESS",
    "19668 GARIB RATH EXPRESS",
    "19093 TAPTI GANGA EXPRESS",
    "12964 GOLDEN TEMPLE MAIL",
    "13627 SWARAJ EXPRESS",
    "13462 DELHI INTERCITY"
  ];

  let seat : [Text] = [
    "28",
    "45",
    "86",
    "57",
    "122",
    "28",
    "45",
    "86",
    "57",
    "122"
  ];

  // public func search(from : Text, to : Text) : async [Text] {

  // return list;
  // };


  public func trnlis() : async [Text] {
    return list; 
  };
};
