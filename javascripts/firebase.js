document.write('\
		<script src="https://www.gstatic.com/firebasejs/5.4.1/firebase.js"></script>\
		<script src="https://www.gstatic.com/firebasejs/5.4.1/firebase-app.js"></script>\
		<script src="https://www.gstatic.com/firebasejs/5.4.1/firebase-database.js"></script>\
		<script src="https://www.gstatic.com/firebasejs/5.4.1/firebase-storage.js"></script>');
var storage;
var storageRef;
var nowRef;
var database;
var compread=false;
function fbsetup(){
	var config = {
		apiKey: 'AIzaSyBkIg5Wq3B-Id00G0jxO2Fe5DdOz1RE7J4',
		authDomain: 'fiction-9d166.firebaseapp.com',
		databaseURL: 'fiction-9d166.firebaseio.com',
		storageBucket: 'gs://fiction-9d166.appspot.com'
	};
	firebase.initializeApp(config);
	database = firebase.database();
}
function add(userId,lnk,late=""){
	var newBook= firebase.database().ref().child(userId).push();
	newBook.set({src:lnk,lat:late});
}
function read(userId,a,A){
	firebase.database().ref(userId).once('value').then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var childKey = childSnapshot.key;
			var childData = childSnapshot.val();
			a(childKey,childData,A);
		});
	});
}
function update(userId){
	return firebase.database().ref(userId).once('value').then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var childKey = childSnapshot.key;
		});
	});
}
function del(userId,key){
	var books=firebase.database().ref(userId).child(key);
	books.remove();
}
function upd(userId,key,src,late){
	var book=firebase.database().ref(userId+"/"+key);
	var a={src,late};
	a.src=src;a.lat=late;
	book.set(a);
}