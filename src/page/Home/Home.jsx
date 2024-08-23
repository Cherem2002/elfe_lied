import React from 'react';
import './Home.css';
import { ReactComponent as Lamp1 } from './lamp1.svg'; // Импортируйте SVG как компонент
import { ReactComponent as Chair1 } from './chair1.svg'; // Импортируйте SVG как компонент
import { ReactComponent as Table1 } from './table1.svg'; // Импортируйте SVG как компонент
import { ReactComponent as Lamps } from './lamps.svg'; // Импортируйте SVG как компонент
import { ReactComponent as Chairs } from './chairs.svg'; // Импортируйте SVG как компонент
import { ReactComponent as Tables } from './tables.svg'; // Импортируйте SVG как компонент
import { ReactComponent as Mirors } from './mirors.svg'; // Импортируйте SVG как компонент
import { ReactComponent as Line } from './lines.svg'; // Импортируйте SVG как компонент
import { ReactComponent as Article1 } from './article1.svg'; // Импортируйте SVG как компонент
import { ReactComponent as Article2 } from './article2.svg'; // Импортируйте SVG как компонент
import { ReactComponent as Article3 } from './article3.svg'; // Импортируйте SVG как компонент


const Home = () => {

    return (
        <div className="Home">
            <div className="Slider">
                <div className='Slide1'>
                    <Lamp1 className="lamp1-svg" />
                    <div className='Cost'>
                        <h4>СВЕТИЛЬНИК</h4>
                        <p className='description'>Функциональная дизайнерская лампа для создания максимально
                            комфортного освещения</p>
                        <p className='price'>150 000 ₽</p>
                    </div>
                </div>
                <div className='Slide2'>
                    <Chair1 className="chair1-svg" />
                    <div className='Cost'>
                        <h4>КРЕСЛО</h4>
                        <p className='description'>Функциональная дизайнерское кресло для создания максимально
                            уюта в помещении</p>
                        <p className='price'>150 000 ₽</p>
                    </div>
                </div>
                <div className='Slide3'>
                    <Table1 className="table1-svg" />
                    <div className='Cost'>
                        <h4>СТОЛ</h4>
                        <p className='description'>Функциональная дизайнерская лампа для создания максимально
                            комфортного освещения</p>
                        <p className='price'>150 000 ₽</p>
                    </div>
                </div>
            </div>
            <div className='Category'>
                <h3>КАТЕГОРИИ</h3>
                <div className='Category-List'>
                    <Lamps className="lamps-svg" />
                    <Chairs className="Chairs-svg" />
                    <Tables className="Tables-svg" />
                    <Mirors className="Mirors-svg" />
                </div>
            </div>
            <Line className="Line-svg" />
            <div className='Blog'>
                <h3>БЛОГ</h3>
                <div className='Feed'>
                    <Article1 className="article1-svg" />
                    <Article2 className="article2-svg" />
                    <Article3 className="article3-svg" />
                </div>
            </div>
        </div>
    );
};
export default Home;