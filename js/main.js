var publicData
var a
toggleNav = () =>{
    let display = document.getElementById('menuMobile')
    let navMobile = document.getElementById('navMobile')
    if(display.classList.contains('slideDown') == false){
        navMobile.classList.remove('slideDownNav')
        navMobile.classList.add('slideDownNavToggle')
        display.classList.remove('noneSlide')
        display.classList.add('slideDown')

    }else{
        display.classList.remove('slideDown')
        display.classList.add('noneSlide')
        navMobile.classList.remove('slideDownNavToggle')
        navMobile.classList.add('slideDownNav')
    }
}

function appendMenu(data){
    var nav = ['navDesktop', 'navMobile']
    let footerApprend = false
    nav.forEach(item => {
        let navigator = document.getElementById(item).getElementsByClassName('menu')[0]
        data.forEach(yItem => {
            var a = document.createElement('a')
            var li = document.createElement('li')
            a.href = yItem.href
            a.textContent = yItem.label
            a.classList.add('liHover')
            li.append(a)
            navigator.appendChild(li)
            if(footerApprend == false){
                let footerNav = document.getElementById('footerNav')
                let li2 = document.createElement('li')
                let a2 = document.createElement('a')
                a2.href = yItem.href
                li2.textContent = yItem.label
                a2.append(li2)
                footerNav.appendChild(a2)
            }
        })
        footerApprend = true
    })
    

}
function appendDetail(dura, deta, condi){
    let duration = document.getElementById('duration')
    let detail = document.getElementById('detail')
    let condition = document.getElementById('condition')

    duration.innerHTML = dura
    detail.innerHTML = deta
    condition.innerHTML = condi
}

loadJson = () => {
    var httpRequest = new XMLHttpRequest();

    var destination = "https://panjs.com/ywc.json"
    httpRequest.open("GET", destination, false)
    httpRequest.send()
    
    var data = JSON.parse(httpRequest.responseText)
    return data
    // var f = fetch(destination).then((data) =>{
    //     return data.json()
    // }).then(data => {
    //     dataRetrive = data
    //     menuItem = data.navbarItems
    //     duration = data.duration
    //     detail = data.detail
    //     condition = data.condition
    //     a = menuItem
    //     appendMenu(menuItem)
    //     appendDetail(duration, detail, condition)
    //     obj = data
    // }).then(()=>{
    //     publicData = obj
    // })
    // .catch(e => {
    //     console.log(e)
    // })
    // return dataRetrive
    
}


// window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
//     var request = window.indexedDB.open("YWC_DB", 3)
    
//     // check indexedDB success
//     request.onsuccess = function(succ){
//         console.log("load database success")
//         var db = succ.target.result
//         addJSONObject(dataObj, db)
//         readJSONObject(db)

//     }
//     request.onerror = function(err){
//         console.log("error on loading db")
//     }
//     request.onupgradeneeded = function(event){
//         // db = event.target.result
//         console.log('upgrade')
//         var objectStore
//         var db = event.target.result
//         if(!db.objectStoreNames.contains('YWC_DB')){
//             objectStore = db.createObjectStore('YWC_DB', 
//             {keyPath: 'navbarItems'} )
//         }
        
//     }

//     function addJSONObject(data, db){
//         let navbarItems = data.navbarItems
//         let duration = data.duration
//         let detail = data.detail
//         let condition = data.condition

//         var ywcDB = db.transaction(['YWC_DB'], 'readwrite')
//         var store = ywcDB.objectStore('YWC_DB')
//         store.put('navbarItems', 'navbarItems')
        
//         //store.put('version2', 'kearpimy')
    
//         ywcDB.onsuccess = (succ) => {
//             console.log("successful store")
//         }
//         ywcDB.onerror = (err) => {
//             console.log("error store")
//         }
//     }
    
//     function readJSONObject(db){
//         var ywcDB = db.transaction(['YWC_DB'], 'readonly')
//         var store = ywcDB.objectStore('YWC_DB').openCursor('kanin')
//         console.log(store)
//         store.onsuccess = function(success){
//             console.log(store.result.value)
//         }
//     }