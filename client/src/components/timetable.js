import Table from 'react-bootstrap/Table';

function TimeTable() {

  const tablestyle={
    width:'100%',
    height:'355px',
    position:'relative',
    top:'30px',
    left:'10px',
    border:'1px solid',
    textAlign:'center',
    backgroundColor:'#FFFBF5'
  } 




  return (
    <Table striped bordered hover size="sm" style={tablestyle}>
      <thead>
        <tr>
          <th>Period</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mon</td>
          <td>lab</td>
          <td>lab</td>
          <td>P&S</td>
          <td>JP</td>
          <td>DCCST</td>
          <td>DLCA</td>
        </tr>
        <tr>
          <td>TUE</td>
          <td>DBMS</td>
          <td>ITK</td>
          <td>lab</td>
          <td>lab</td>
          <td>P&S</td>
          <td>sports</td>
        </tr>
        <tr>
        <td>WED</td>
          <td>AIMLTTA</td>
          <td>AIMLTTA</td>
          <td>lab</td>
          <td>lab</td>
          <td>DBMS</td>
          <td>Library</td>
        </tr>
        <tr>
        <td>THU</td>
          <td>DLCA</td>
          <td>JP</td>
          <td>DBMS</td>
          <td>DBMS</td>
          <td>ITK</td>
          <td>ICFP</td>
        </tr>
        <tr>
        <td>FRI</td>
          <td>ICFP</td>
          <td>Math</td>
          <td>DCCST</td>
          <td>DLCA</td>
          <td>JP</td>
          <td>DCCST</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TimeTable;