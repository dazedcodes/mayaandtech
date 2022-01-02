import React from 'react';
import '../App.css';

export default function Project(props) {
    function handleClick() {
        var coll = document.getElementsByClassName("collapsible");
        var i;
        
        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }
          });
        }
    }
    return (
        <div className="project">
            <button type="button" class="collapsible" onClick={handleClick}><div className="buttonContent">{props.projectName}<svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg></div></button>
            <div className="content">
                <p>{props.projectDesc}</p>
                <a href={props.CTALink}><button>{props.projectCTA}</button></a>
            </div>
        </div>
    )
}
