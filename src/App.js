import React from 'react';
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default class App extends React.Component {
  state = {
    Person:{fullName:"",bio:"",
    profession:"Click to switch between the profiles of Elon Musk and Jeff Bezos",show:true}
  };
  showClick=()=>{
    this.setState({Person:{fullName:"Elon Musk",bio:"Elon Reeve Musk FRS is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX; early stage investor, CEO, and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink; and co-founder and initial co-chairman of OpenAI.",
    imgSrc:"https://media.beam.usnews.com/d1/d8/8501ba714a21aed9a7327e02ade1/180515-10thingselonmusk-editorial.jpg",profession:"I really can't count his jobs",show:!this.state.Person.show}})
  }
  hideClick=()=>{
    this.setState({ Person: {
      fullName: "Jeff Bezos",
      bio: "Jeffrey Preston Bezos is an American internet entrepreneur, industrialist, media proprietor, and investor. Bezos is the founder and CEO of the multi-national technology company Amazon. He is the richest person in the world according to Bloomberg's Billionaires Index.",
      imgSrc: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tcx050120snopener-01-1585837947.jpg",
      profession: "CEO of Amazon",
      show:!this.state.Person.show,
    }})
  
  }
  render() {
    return (
      <div className="App">
        <Button onClick={this.state.Person.show ? this.showClick : this.hideClick}>Click me!</Button>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.state.Person.imgSrc} />
        <Card.Body style={{backgroundColor:"white"}}>
        <Card.Title> <h2> {this.state.Person.fullName}</h2></Card.Title>
        <Card.Text> <h3>{this.state.Person.profession}</h3> </Card.Text>
        <Card.Text> <h6>{this.state.Person.bio}</h6> </Card.Text>
        </Card.Body>
        </Card>
      </div>
    )
  }
}