import "./css/card.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export function Cards({ imageSrc, imageAlt, title, description1, description2, href, classe}) {
  return (
    <Card className={classe}>
      <Card.Img variant="top" src={imageSrc} alt={imageAlt} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description1}
        </Card.Text>
        <Card.Text>
          {description2}
        </Card.Text>
        <Button className="btn" href={href} variant="primary">SCOPRI DI PI&Ugrave;</Button>
      </Card.Body>
    </Card>
  );
}
