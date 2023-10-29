import Text "mo:base/Text";
import Array "mo:base/Array";
import List "mo:base/List";

actor {

  // --------------------------- Train List -------------------------

  let jal : [Text] = [

    "12903 RAJDHANI EXPRESS",
    "12021 SHATABDI EXPRESS",
    "09102 VANDE BHARAT EXPRESS",
    "12964 GOLDEN TEMPLE MAIL",
  ];

  let mum : [Text] = [
    "19425 MUMBAI AHMEDABAD EXPRESS", 
    "18542 TEJAS RAJDHANI EXPRESS",
    "19752 DURONTO EXPRESS",
    "19668 GARIB RATH EXPRESS",
  ];

  let del : [Text] = [
    "12903 RAJDHANI EXPRESS",
    "12021 SHATABDI EXPRESS",
    "13462 DELHI INTERCITY",
    "09102 VANDE BHARAT EXPRESS",
  ];
  let bang : [Text] = [
    "19843 BENGALURU MYSORE EXPRESS", 
    "19093 TAPTI GANGA EXPRESS",
    "19333 VANDE BHARAT EXPRESS",  
    "13627 SWARAJ EXPRESS",
  ];

  let hyd : [Text] = [
    "19744 HYDERABAD INTERCITY EXPRESS",
    "19752 DURONTO EXPRESS",
    "19668 GARIB RATH EXPRESS",
    "09102 VANDE BHARAT EXPRESS",
  ];

  let kol : [Text] = [
    "18354 KOLKATA MAIL",
    "19752 DURONTO EXPRESS",
    "13627 SWARAJ EXPRESS",
    "19668 GARIB RATH EXPRESS",
  ];

  // ---------------------------- Train List ------------------------

  // ------------ User Input Display --------------
  var from : Text = "";
  var to : Text = "";
  var date : Text = "";

  public func setFrom(value : Text) : async Text {
    from := value;
    return "from";
  };

  public func setTo(value : Text) : async Text {
    to := value;
    return "to";
  };

  public func setDate(value : Text) : async Text {
    date := value;
    return "date";
  };

  // --------

  public query func sendFrom() : async Text {
    return from;
  };

  public query func sendTo() : async Text {
    return to;
  };

  public query func sendDate() : async Text {
    return date;
  };

  // ------------ User Input Display --------------


  public query func trnlis() : async [Text] {
    switch (from) {
      case ("jalandhar") { return jal };
      case ("delhi") { return del };
      case ("mumbai") { return mum };
      case ("bangalore") { return bang };
      case ("hyderabad") { return hyd };
      case ("kolkata") { return kol };
      case (_) { return [] };
    };
  };


//-------------------------------- TICKET BOOKING ------------------------------------//
  public type Info = {
    name : Text;
    age : Nat;
    coach : Text;
    coType : Text;
  };

  var list : List.List<Info> = List.nil<Info>();

  public func ticketDetails(userInfo : Info) : async Info {
    let user : Info = {
      name = userInfo.name;
      age = userInfo.age;
      coach = userInfo.coach;
      coType = userInfo.coType;
    };
    list := List.push(user, list);
    return user;
  };

};

//-------------------------------END----------------------------------//
