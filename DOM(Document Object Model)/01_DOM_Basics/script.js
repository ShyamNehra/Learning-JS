// Some DOM commands



//document.getElementById('title')     -> element with ID = "title" will be targeted

//document.getElementsByClassName("heading")     -> element with Class = "heading" will be targeted

//document.getElementById('title').getAttribute('class')     -> will give the class name of element with ID = "title"

//document.getElementById('title').setAttribute('class', 'title2')     -> will set class name as "title2"

//const title = document.getElementById('title')

//title.style.backgroundColor = 'green'



/*
<body class="bg-color">
    <div>
        <h1 id="title" class="heading">DOM Manipulation in JS <span style = "display: none;"> Demo Text </span></h1>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <h2>1 Lorem ipsum dolor sit amet.</h2>
    <h2>2 Lorem dolor sit amet.</h2>
    <h2>3 Lorem ipsum sit amet.</h2>
    <input type="password" name="" id="">
</body>
*/

//title.innerText     ->  'DOM Manipulation in JS'

//title.textContent    ->  'DOM Manipulation in JS  Demo Text '   (text hidden with any CSS property will also be visible with this)

//title.innerHTML     -> 'DOM Manipulation in JS <span style="display: none;"> Demo Text </span>'



//--------------- QUERY SELECTOR --------------
//(all CSS selectors will work)

// document.querySelector('h2')     -> <h2>​1 Lorem ipsum dolor sit amet.​</h2>​   (will select 1st element with 'h2' tag)

// document.querySelector(#title)     -> to select element with ID = "title"

//document.querySelector('p:first-child')

// document.querySelector('input[type = "password"]') 

// document.querySelectorAll('h2')     -> NodeList(3) [h2, h2, h2]


//querySelectorall will give a node list, slightly different from array as map, fliter not available (for-each etc are availble) but we can target elements from index like array:
//const tempLiList = document.querySelectorAll('li')
//tempLiList[0].style.backgroundColor = 'green'   



//----------forEach Loop on nodelist----------
//const tempLiList = document.querySelectorAll('li')
//tempLiList.forEach(function (l) {l.style.backgroundColor = "green"})



//-----------Converting HTML Collection into Array--------------
//(for-each, etc not available for this)

//const ClassList = document.getElementsByClassName('list_items')    ->   HTMLCollection(4) [li.list_items, li.list_items, li.list_items, li.list_items]     (will give HTML Collection)

//Array.from(ClassList)






