let session = new Session();
session = session.getSession();

if(session !== ''){
    alert("You are logged in!");
}else{
    window.location.href = '/';
}