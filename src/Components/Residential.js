import React,{Component} from 'react'
import ResidentialItem from './ResidentialItem'
import Residential1 from './Residential1.jpg'
import Residential2 from './Residential2.jpg'
import Residential3 from './Residential3.jpg'
import Residential4 from './Residential4.jpg'
import Residential5 from './Residential5.jpg'

export class Residential extends Component {
  articles= [
    {
      source: {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": "Amy Skorheim",
        "title": "Residential",
        "description": "Constructed by alkaramah architects in 2018…",
        "url": "./Gilgit",
        "urlToImage": Residential1,
        "publishedAt": "2022-12-26T14:15:37Z",
        "content": "If you need a break from the hustle and cheer of the holidays, theres nothing better than the ultimate escapist genre: sci-fi. This year has been a good one for those who like their entertainment off… [+14907 chars]"
        },
        {
          source: {
            "id": "engadget",
            "name": "Engadget"
            },
            "author": "Amy Skorheim",
            "title": "Residential",
            "description": "Constructed by alkaramah architects in 2018…",
            "url": "https://www.engadget.com/best-sci-fi-movies-books-shows-141537070.html",
            "urlToImage": Residential2,
            "publishedAt": "2022-12-26T14:15:37Z",
            "content": "If you need a break from the hustle and cheer of the holidays, theres nothing better than the ultimate escapist genre: sci-fi. This year has been a good one for those who like their entertainment off… [+14907 chars]"
            },
            {
              source: {
                "id": "engadget",
                "name": "Engadget"
                },
                "author": "Amy Skorheim",
                "title": "Residential",
                "description": "Constructed by alkaramah architects in 2018…",
                "url": "https://facebook.com",
                "urlToImage": Residential3,
                "publishedAt": "2022-12-26T14:15:37Z",
                "content": "If you need a break from the hustle and cheer of the holidays, theres nothing better than the ultimate escapist genre: sci-fi. This year has been a good one for those who like their entertainment off… [+14907 chars]"
                },
                {
                  source: {
                    "id": "engadget",
                    "name": "Engadget"
                    },
                    "author": "Amy Skorheim",
                    "title": "Residential",
                    "description": "Constructed by alkaramah architects in 2018…",
                    "url": "https://hec.edu.pk",
                    "urlToImage": Residential4,
                    "publishedAt": "2022-12-26T14:15:37Z",
                    "content": "If you need a break from the hustle and cheer of the holidays, theres nothing better than the ultimate escapist genre: sci-fi. This year has been a good one for those who like their entertainment off… [+14907 chars]"
                    },  
                    {
                      source: {
                        "id": "engadget",
                        "name": "Engadget"
                        },
                        "author": "Amy Skorheim",
                        "title": "Residential",
                        "description": "Constructed by alkaramah architects in 2018…",
                        "url": "https://hotmail.com",
                        "urlToImage": Residential5,
                        "publishedAt": "2022-12-26T14:15:37Z",
                        "content": "If you need a break from the hustle and cheer of the holidays, theres nothing better than the ultimate escapist genre: sci-fi. This year has been a good one for those who like their entertainment off… [+14907 chars]"
                        }
      ] 
      constructor(){
        super()
        this.state={
    articles : this.articles,
    loading : false,
    totalResults :0
        }
       
      }   
      render() {
  return (
    
    <div className='container my-5' style={{ backgroundImage: "url(images/Contact.jpg)",backgroundSize: 'cover',
      
  }}> 
      <br></br>
      <h2 className="text-center my-3">Projects - Residential</h2>
      <div className = 'row' >
      {this.state.articles.map((element)=>{
  return <div className = 'col-md-4' key={element.url} >
  <ResidentialItem  title = {element.title} description = {element.description}
             imageurl = {element.urlToImage} url={element.url}/>
  </div> 
})}  
   </div>
 </div>
)
}
}
export default Residential




