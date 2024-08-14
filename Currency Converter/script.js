const droplist = document.querySelectorAll(".drop-list select");
for (let i = 0; i < droplist.length; i++) {
   for(currency_code in  country_code){
       let selected;
       if(i == 0){
           selected = currency_code == "USD" ? "selected" :"";
       }else if(i == 0){
           selected = currency_code == "NPR" ? "selected" : "";
       }
       let optionTag = `<option value="${currency_code}"${selected}>${currency_code}</option>`;
       dropList[i].insertAdjacentHTML("beforeend", optionTag);
   }
    
}