import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// eslint-disable-next-line react/prop-types
export function CardHome({imageSrc, titleText, descriptionText, link}) {


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageSrc}/>
            <Card.Body>
                <Card.Title>{titleText}</Card.Title>
                <Card.Text>
                    {descriptionText}
                </Card.Text>
                <Button variant="primary">Scopri di più</Button>
            </Card.Body>
        </Card>
    )

}