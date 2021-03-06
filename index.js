let isSubMenuDisplayed = true;

function hideSubMenu(){
  let subMenus = document.getElementsByClassName("submenu");
  for(let i=0; i<subMenus.length; i++){
    if(isSubMenuDisplayed){
      subMenus[i].style.display = "none";
    }
    else{
      subMenus[i].style.display = "inline";
    }
  }
  isSubMenuDisplayed = !isSubMenuDisplayed;
  
}

function showSchoolInfo(schoolCode){
  let schoolMenus = document.getElementsByClassName("sekolahMenu");
  let schoolInfos = document.getElementsByClassName("sekolahInfo");

  for(let i=0; i<schoolMenus.length; i++){
    schoolMenus[i].classList.remove("active");
  }

  for(let i=0; i<schoolInfos.length; i++){
    schoolInfos[i].style.display = "none";
  }
  
  switch(schoolCode){
    case 1:
      document.getElementById("tkMenu").classList.add("active");
      document.getElementById("tkInfo").style.display = "block";
      break;
    case 2:
      document.getElementById("sdMenu").classList.add("active");
      document.getElementById("sdInfo").style.display = "block";
      break;
    case 3:
      document.getElementById("smpMenu").classList.add("active");
      document.getElementById("smpInfo").style.display = "block";
      break;
    case 4:
      document.getElementById("smaMenu").classList.add("active");
      document.getElementById("smaInfo").style.display = "block";
      break;
    case 5:
      document.getElementById("universitasMenu").classList.add("active");
      document.getElementById("universitasInfo").style.display = "block";
      break;
  }

}

function showSubmenu(menuCode){
  let sections = document.querySelectorAll('section[id*="Section"]');

  for(let i=0; i<sections.length; i++){
    sections[i].style.display = "none";
  }

  switch(menuCode){
    case 1:
      document.getElementById("firstSection").style.display = "block";
      document.getElementById("biodata").src="assets/biodataActive.jpg";
      document.getElementById("hobbies").src="assets/hobby.jpg";
      document.getElementById("education").src="assets/education.png";
      break;
    case 2:
      document.getElementById("secondSection").style.display = "block";
      document.getElementById("biodata").src="assets/biodata.jpg";
      document.getElementById("hobbies").src="assets/hobbyActive.jpg";
      document.getElementById("education").src="assets/education.png";
      break;
    case 3:
      document.getElementById("thirdSection").style.display = "block";
      document.getElementById("biodata").src="assets/biodata.jpg";
      document.getElementById("hobbies").src="assets/hobby.jpg";
      document.getElementById("education").src="assets/educationActive.jpg";
      break;
  }
}



