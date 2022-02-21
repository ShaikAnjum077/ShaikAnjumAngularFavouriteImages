import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  content: Content[] =[{
    id: 1,
    title: "Tom",
    description: "without image block",
    creator: "Anjum",
    imgURL: "",
    type: "",
    tags: ["Anjum"]
  },
  {
    id: 2,
    title: "Hippopotamas",
    description: "wild animal",
    creator: "Anjum",
    imgURL: "https://secure.img1-fg.wfcdn.com/im/78902078/resize-h445%5Ecompr-r85/3705/37057945/Hippo+Portrait+Paper+Print.jpg",
    type: "",
    tags: ["Anjum"]
  },
  {
    id: 3,
    title: "Tom&Jerry",
    description: "Images not defined",
    creator: "Anjum",
    imgURL: "",
    type: "tech",
    tags: ["Anjum", "Shaik"]
  },
  {
    id: 4,
    title: "Tigercat",
    description: "King of Animals",
    creator: "Anjum",
    imgURL: "https://i.etsystatic.com/29647992/r/il/852975/3475998513/il_1588xN.3475998513_ifoo.jpg",
    type: "tech",
    tags: ["AnjumShaik"]
  }, 
  {
    id: 5,
    title: "Elephant",
    description: "SDE",
    creator: "Anjum",
    imgURL: "https://cdn.shopify.com/s/files/1/0588/5647/2754/products/elephant_1024x1024@2x.jpg?v=1637533768",
    type: "nontech",
    tags: ["Anjum", 'test']
  }, 
  {
    id: 6,
    title: "cat",
    description: "Cute Cats",
    creator: "Anjum",
    imgURL: "https://da.lowes.ca/webassets/images/330614050_MainImage_001.jpg",
    type: "nontech",
    tags: ["AnjumCat"]
  }, 
  {
    id: 7,
    title: "Monkey",
    description: "SDE",
    creator: "Anjum",
    imgURL: "https://thumbs.dreamstime.com/z/vervet-monkey-chlorocebus-pygerythrus-5204587.jpg",
    type: "nontech",
    tags: ["Anjum"]
  }, 
  {
    id: 8,
    title: "Dog",
    description: "SDE",
    creator: "Anjum",
    imgURL: "https://secure.img1-fg.wfcdn.com/im/83376873/resize-h445%5Ecompr-r85/7348/73482524/Caughfield+Labrador+Pup+Canvas+Art.jpg",
    type: "nontech",
    tags: ["AnjumShaik"]
  }];
  searchMessage: string = "";
  searchFlag: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  typeCheck(searchValue: string): void{
    let searchList = this.content.filter(c => c.type == searchValue);
    if (searchList.length > 0){
      this.searchMessage  = "Found the movie!";
      this.searchFlag = true;
    }
    else{
      this.searchMessage  = "No movie with that title";
      this.searchFlag = false;
    }
  }


}
