import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Summery() {
    return (
        <CardGroup>
            <Card>

                <Card.Body>
                <i className="fa-solid fa-phone"></i>
                    <Card.Title>Total Calls</Card.Title>
                    <Card.Text>
                        This Month Calls
                    </Card.Text>
                    <span>26</span>
                </Card.Body>
               
            </Card>
            <Card>
               
                <Card.Body className=''>
                    <Card.Title>Completed Call</Card.Title>
                    <Card.Text>
                      This Month{' '}
                    </Card.Text>
                    <span>13</span>
                </Card.Body>
              
            </Card>
            <Card>
              
                <Card.Body>
                    <Card.Title>Pending Calls</Card.Title>
                    <Card.Text>
                        This Month
                    </Card.Text>
                    <span>13</span>
                </Card.Body>
               
            </Card>
        </CardGroup>
    );
}

export default Summery;