const id=9
const show=false
async function fetchdata(){
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=>res.json())
    .then(data=>{
       
        let profiledata=`<div class="card">
        <div class="cardheader">
            <h2>    <ion-icon name="arrow-back-outline"></ion-icon>${data.name} <img class='icon' src='./images/verified.png' /> <img class='icon2' src='./images/icon.png'/></h2>
            <span>32.5k Tweets</span>
        </div>
        <div class="cardimage">
            <img src="./images/twitter.png"/>
        </div>
       
        <div class="profilesection">
            <div class="profilepicture">
                <img src="./images/profile.png"/>
                <h3>${data.name}<img class='icon' src='./images/verified.png' /> <img class='icon2' src='./images/icon.png'/></h3>
                <h5>@${data.username}</h5>
            </div>
            <div class="following">
                <a href="">  <ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon></a>
                <a href="https://${data.email}"> <ion-icon name="mail-outline"></ion-icon></a>
               <a href=""> <ion-icon name="notifications-outline"></ion-icon></a>
                <button>following</button>
            </div>
        </div>
        <div class="profileinfo">
            <p class="info">Lead dev <span>${data.company.name}</span> platform created <span>${data.company.name}</span>|${data.company.bs}|${data.company.catchPhrase}</p>
            <div class="stacks">
                <a><ion-icon name="bag-outline"></ion-icon>science and technology</a>
               <a> <ion-icon name="location-outline"></ion-icon>etherium</a> 
               <a class='websitelink' href='https://${data.website}'> <ion-icon name="link-outline"></ion-icon>${data.website}</a> 
               <a><ion-icon name="calendar-outline"></ion-icon>Joined August 2020</a> 
            </div>
            <div class="followers">
                <p>322 <span>following</span></p>
                <p>110.8k <span>followers</span></p>
            </div>
            <div class="followedby">
                <p><img src='./images/f1.jpg'><img class='f2' src='./images/f2.jpg'><img class='f3' src='./images/f3.jpg'>
                followed by langford kwabena,rohit||(emoji) and 29 others follow you</p>
            </div>
            
        </div>

        <div class="navigation">
            <ul>
                <li><a class="active" href="">Tweets</a></li>
                <li><a href="">Replies</a></li>
                <li><a href="">Media</a></li>
                <li><a href="">Links</a></li>
            </ul>
        </div>

    </div>`
        document.getElementById("main").innerHTML=profiledata
    })
    .catch(error=>error)
}


async function collecttweets(){
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(res=>res.json())
    .then(data=>{
        let html=''
        data.map((data)=>{
            let collectedtweets = ` <div class="tweetscard">
            <div class="tweetscardprofile">
                <img src="./images/profile.png" height="100px" width="100px"/>
            </div>
            <div class="tweetscardcontent">
                <div class="tweetscardcontentheader">
                    
                   <div class="tweetscardcontentheaderh3">
        
                    <h3> <ion-icon name="arrow-back-outline"></ion-icon>${data.title}</h3>
                   </div>
                    <div class="tweetscardcontentheadericon">
                        <ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon>
                    </div>
                </div>
                <div class="tweetscardcontenttext">
                    
                    <p>${data.body}</p>
                </div>           
            </div>
        </div>`
        html+=collectedtweets
        });
        document.getElementById('tweets').innerHTML += html
    })
}
fetchdata();
collecttweets();
