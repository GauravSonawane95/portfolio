import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  skills:any[]=[
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png", "name": "Angular" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png", "name": "TypeScript" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png", "name": "JavaScript" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1HVNHQmF6XqXS0xqpvfcJFY3cQIAQEB3XmJ_edOZdMQ&s", "name": "HTML5" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png", "name": "CSS/SCSS" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png", "name": "Bootstrap" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png", "name": "Angular Material" },
    { img: "https://www.shutterstock.com/image-vector/api-application-interface-icon-simple-600nw-2188533787.jpg", "name": "Rest API" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/HTTP_logo.svg/2560px-HTTP_logo.svg.png", "name": "HTTPs" },
    { img: "https://banner2.cleanpng.com/20240213/xxc/transparent-github-icon-cat-with-tilted-head-closed-eyes-blue-1710879659301.webp", "name": "GitHub" },
    { img: "https://cdn-icons-png.flaticon.com/512/10435/10435114.png", "name": "Chrome Debugging" },
   { img: "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png", "name": "MySQL" },
   
 ]

}
