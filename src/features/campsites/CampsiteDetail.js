import {Col, Card, CardImg, CardText, CardBody} from 'reactstrap';

const CampsiteDetail = ({ campsite }) => {
    if (!campsite) {
        return <div></div>
    }
    const {image, name, description } = campsite;
    return (
        <Col md = '5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>
                        {description}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    )

};

export default CampsiteDetail;