var tableArray = [
    {
        customerName: "hema",
        customerEmail: "hema@gmail.com",
        customerID: "123",
        phoneNumber: "123456789"
    }
];

var waitingArray = [
    {
        customerName: "abs",
        customerEmail: "abs@gmail.com",
        customerID: "456",
        phoneNumber: "6574778383",
  }
];

module.exports = function(app) {
    app.get("/api/tables", function(req, res) {
      res.json(tableArray);
    });
  
    app.get("/api/waitlist.", function(req, res) {
      res.json(waitingArray);
    });
  
    app.post("/api/tables", function(req, res) {
      if (tableArray.length < 5) {
        tableArray.push(req.body);
        res.json(true);
      }
      else {
        waitingArray.push(req.body);
        res.json(false);
      }
    });
  
    app.post("/api/clear", function() {
        tableArray = [];
        waitingArray = [];
  
      console.log(tableArray);
    });
  };
  