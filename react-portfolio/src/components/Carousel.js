import React from 'react';
import TrilogyApp from '../assets/images/TrilogyApp.png';
import PasswordGenerator from '../assets/images/PasswordGenerator.png';
import DayPlanner from '../assets/images/DayPlanner.png';
import Card from '../components/Card'
import Container from 'react-bootstrap/esm/Container';
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            items: [
                {
                    id: 0,
                    title: 'Trilogy Travel App',
                    subTitle: 'The single site to find your next adventure',
                    imgSrc: TrilogyApp,
                    link: 'https://toogii2019.github.io/Project1/',
                    repoLink: 'https://github.com/kangb3/Project1',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Password Generator',
                    subTitle: 'Generate a secure password',
                    imgSrc: PasswordGenerator,
                    link: 'https://kangb3.github.io/Password-Generator/',
                    repoLink: 'https://github.com/kangb3/Password-Generator/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Day Planner App',
                    subTitle: 'Plan out your day',
                    imgSrc: DayPlanner,
                    link: 'https://kangb3.github.io/Day-Planner-App/',
                    repoLink: 'https://github.com/kangb3/Day-Planner-App/',
                    selected: false
                },
            ]
            
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }



    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

};

export default Carousel;