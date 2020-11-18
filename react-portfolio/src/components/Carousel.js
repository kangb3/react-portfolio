import React from 'react';
import TrilogyApp from '../assets/images/TrilogyApp.png';
import PasswordGenerator from '../assets/images/PasswordGenerator.png';
import DayPlanner from '../assets/images/DayPlanner.png';
import ReadmeGenerator from '../assets/images/ReadmeGenerator.png';
import WeatherDashboard from '../assets/images/WeatherDashboard.png';
import JobFinder from '../assets/images/JobFinder.png'
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
                {
                    id: 3,
                    title: 'Weather Dashboard',
                    subTitle: 'Display the current weather condition and five day forcast of specific city that a user searched for. The Weather Dashboard utilizes HTML, CSS, JavaScript, and jQuery and Open Weather API to retrieve and display weather information in the browser to a user.',
                    imgSrc: WeatherDashboard,
                    link: 'https://kangb3.github.io/Weather-Dashboard/',
                    repoLink: 'https://github.com/kangb3/Weather-Dashboard',
                    selected: false
                },
                {
                    id: 4,
                    title: 'JobFinder',
                    subTitle: 'Application to help people find tech jobs. Built using Javascript, Handlebars, Sequelize, Node and Express.',
                    imgSrc: JobFinder,
                    link: 'https://uw-jobfinder.herokuapp.com/',
                    repoLink: 'https://github.com/kangb3/JobFinder',
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