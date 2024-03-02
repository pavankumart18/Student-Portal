import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import main from "./CBIT.jpg"
function personalinfo(props) {

  const cardstyle={
    textAlign:"center",
    width: '16rem',
    positon:'realtive',
    backgroundColor:'white',
    top:'10px',
    border:'1px solid'
  }
  
  
  return (
    <Card style={cardstyle}>
      <Card.Img variant="top" src={main} style={{borderRadius:'100%'}}/>
      <Card.Body>
        <Card.Title>Roll No:{props.name.rollno}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Name:{props.name.name}</ListGroup.Item>  
        <ListGroup.Item>Branch:{props.name.branch}</ListGroup.Item>
        <ListGroup.Item>Phone number:{props.name.phoneno}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default personalinfo;