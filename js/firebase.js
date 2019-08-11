// Your web app's Firebase configuration
        var firebaseConfig = {
          apiKey: "AIzaSyALJ-L8OYuNChXIBurojo1MnnHN9pjoZ3A",
        authDomain: "innerve-a43dd.firebaseapp.com",
        databaseURL: "https://innerve-a43dd.firebaseio.com",
        projectId: "innerve-a43dd",
        storageBucket: "innerve-a43dd.appspot.com",
        messagingSenderId: "651253206894",
        appId: "1:651253206894:web:2204e70ab7fa178d"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
        
    var messagesRef = firebase.database().ref('Registration');
    var contactRef = firebase.database().ref('Queries');
    var sponsorRef = firebase.database().ref('SponsorEmail');


    function save(){
    
      var sponsoremail = document.getElementById('sponsoremail').value;
      saveSponsor(sponsoremail);
    }

    function saveSponsor(sponsoremail){
      
      var newSponsorRef = sponsorRef.push();
      newSponsorRef.set({
        sponsor_email:sponsoremail
      }) 
      window.alert("We have recieved your email! You will contact you shortly.");
    }

    function recieve(){
      var contact_email = document.getElementById('contact_email').value;
      var contact_message = document.getElementById('contact_message').value;
      saveContact(contact_email,contact_message);
    }

    function saveContact(contact_email,contact_message) {
      var newContactRef = contactRef.push();
      newContactRef.set({
        contact_email:contact_email,
        contact_message:contact_message
      })

      window.alert("We Have recieved your query!! We will reply you as soon as possible");
    }

    function send(){
       var name = document.getElementById('1').value;
       var email = document.getElementById('sub').value;
       var phno = document.getElementById('2').value;
        
       saveMessage(name,email,phno);
    }
    

    function saveMessage(name,email,phno) {
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        name:name,
        email:email,
        phnho:phno
      });
    }

    
  