import React from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import BreakfastImg from '../utils/img/breakfast.jpg';
import LunchImg from '../utils/img/lunch.jpg';
import DinnerImg from '../utils/img/dinner.jpg';
import DessertImg from '../utils/img/dessert.jpg';
const breakfast = [
  {
      id: 1,
      name: 'Masala Dosa',
      description: 'A thin, crispy crepe made from fermented rice and lentil batter, filled with spicy potato filling.',
      price: '₹50'
  },
  {
      id: 2,
      name: 'Poha',
      description: 'Flattened rice cooked with onions, tomatoes, and spices.',
      price: '₹40'
  },
  {
      id: 3,
      name: 'Upma',
      description: 'A savory dish made from semolina, cooked with vegetables and seasoned with spices.',
      price: '₹45'
  }
];

const lunch = [
  {
      id: 1,
      name: 'Butter Chicken',
      description: 'Tender pieces of chicken cooked in a creamy, buttery tomato-based sauce, served with rice or naan.',
      price: '₹200'
  },
  {
      id: 2,
      name: 'Palak Paneer',
      description: 'Soft cubes of paneer (Indian cottage cheese) cooked in a flavorful spinach gravy.',
      price: '₹180'
  },
  {
      id: 3,
      name: 'Chole Bhature',
      description: 'Spicy chickpea curry served with deep-fried bread called bhature.',
      price: '₹150'
  }
];

const dinner = [
  {
      id: 1,
      name: 'Biryani',
      description: 'Fragrant basmati rice cooked with marinated meat (chicken, mutton, or beef) and aromatic spices.',
      price: '₹250'
  },
  {
      id: 2,
      name: 'Paneer Tikka Masala',
      description: 'Grilled cubes of paneer cooked in a creamy tomato-based gravy.',
      price: '₹180'
  },
  {
      id: 3,
      name: 'Dal Tadka',
      description: 'Yellow lentils tempered with cumin, garlic, and spices.',
      price: '₹100'
  }
];

const dessert = [
  {
      id: 1,
      name: 'Gulab Jamun',
      description: 'Deep-fried milk dumplings soaked in sugar syrup, flavored with cardamom and saffron.',
      price: '₹80'
  },
  {
      id: 2,
      name: 'Rasgulla',
      description: 'Soft, spongy balls made from paneer and soaked in sugar syrup.',
      price: '₹60'
  },
  {
      id: 3,
      name: 'Kulfi',
      description: 'Indian ice cream made from thickened milk, flavored with saffron, cardamom, and nuts.',
      price: '₹100'
  }
];


function Menu() {
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menu</h1>
                </div>
            </header>

            <div className='breakfast my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Breakfast</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={BreakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {breakfast.map((breakfast) => (
                                <div key={breakfast.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {breakfast.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {breakfast.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {breakfast.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='lunch bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Lunch</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {lunch.map((lunch) => (
                                <div key={lunch.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {lunch.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {lunch.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {lunch.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={LunchImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='dinner my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dinner</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dinner.map((dinner) => (
                                <div key={dinner.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dinner.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dinner.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dinner.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='dessert bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dessert</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dessert.map((dessert) => (
                                <div key={dessert.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dessert.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dessert.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dessert.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;