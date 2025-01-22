
   let kitchenInput = document.getElementById("kitchen-input");
   let addBtn = document.getElementById("add-btn");
   let kitchenItemList = document.getElementById("kitchen-item-list");
    
   let kitchenInputDate;
   let kitchenInputDateArrey = [];

    function setLocalStorage(){
      localStorage.setItem("list",JSON.stringify(kitchenInputDateArrey));
   }

    function getLocalStroage() {
      if ( localStorage.getItem("list")){
      kitchenInputDateArrey = JSON.parse(localStorage.getItem("list"));
      buildUI()
   }
    }

    function buildUI () { 
      kitchenItemList.textContent = "";
      kitchenInputDateArrey.forEach((item) => {
        
          //step 3
      // creat DOM elements now
      let li = document.createElement('li');
  
      let spanE1 = document.createElement('span')
      li.appendChild(spanE1)
     spanE1.innerText = item;
  
      li.style.cssText = "animation-name: slideIn;";
      kitchenItemList.appendChild(li);
      kitchenInput.value = '';
      kitchenInput.focus();
      
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      //create trash button
      let trashBtn = document.createElement("i");
      trashBtn.classList.add("fas","fa-trash");
      li.appendChild(trashBtn);
  
      // creat edit button
  
      let editbtn = document.createElement('i')
      editbtn.classList.add('fa','fa-edit')
      li.appendChild(editbtn);
      })

     

    }

   //step 2
   //add kitchen item
   function addKitchenItems() {
     kitchenInputDate = kitchenInput.value;
     kitchenInputDateArrey.push(kitchenInputDate);
     console.log(kitchenInputDateArrey);

    // set date to local storage
    setLocalStorage();
    //get date from local storage
    getLocalStroage();
    
  

    

   }

   // xxxxxxxxx  Delete item from kitchen list    xxxxxxxxxxxxxx
   function deleteKitchnItem(event){
      if(event.target.classList[0] === "fas"){
         let item = event.target.parentElement;
         
         item.classList.add("SlideOut");
        item.addEventListener("transitionend" , function(){
             console.log("Animation has been completed");
            item.remove();
        });
       
      }
   }

   //edit kitchen itm
   function editKitchenItem (event) {
   if(event.target.classList[1] === "fa-edit"){
      let editedValue = prompt("Please add new text");
     let item = event.target.parentElement;
     let spanE1 = item.querySelector("span");
     spanE1.innerText = editedValue;
     
    

   }
   }

   // step 1
   // add an event lisner to the button
   addBtn.addEventListener('click', addKitchenItems);
   kitchenItemList.addEventListener("click",deleteKitchnItem);
   kitchenItemList.addEventListener('click', editKitchenItem);


   getLocalStroage();


         //local  strorage

   // // set date to local storage
   // localStorage.setItem("name","Rootsys")
   // localStorage.setItem("passion","frontend");

   // //get date feom local storage
   //  let passion = localStorage.getItem("passion");
   //  console.log(passion);

