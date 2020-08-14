import React from 'react'
import { Link, Route } from 'react-router-dom';
import { MainMenu, AboutMenu } from './MainMenu';
import './stylesheets/Pages.css'

const PageTemplate = ({ children }) =>
    <div className="page">
        <MainMenu />
        {children}
    </div>

export const Home = () =>
    <section className="home">
        <h1>[Home Page of Company]</h1>

        <nav>
            <Link to="about">About</Link>
            <Link to="events">Events</Link>
            <Link to="products">Products</Link>
            <Link to="contact">Contact</Link>
        </nav>
    </section>

export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Resorse not found at '{location.pathname}'</h1>
    </div>

export const Events = () =>
    <PageTemplate>
        <section className="events">
            <h1>[Events Calendar]</h1>
        </section>
    </PageTemplate>


export const Products = () =>
    <PageTemplate>
        <section className="products">
            <h1>[Products Catalog]</h1>
        </section>
    </PageTemplate>


export const Contact = () =>
    <PageTemplate>
        <section className="contact">
            <h1>[Contact Us]</h1>
        </section>
    </PageTemplate>

export const About = ({ match }) =>
    <PageTemplate>
        <section className="about">
            <Route component={AboutMenu} />
            <Route exact path="/about/company" component={Company} />
            <Route path="/about/history" component={History} />
            <Route path="/about/services" conponent={Services} />
            <Route path="/about/location" component={Location} />
        </section>
    </PageTemplate>


export const Company = () =>
    <section className="company">
        <h2>About our Company</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi aliquam expedita temporibus eligendi sequi excepturi accusamus. Odio distinctio consectetur laudantium quasi minima ad possimus itaque repellat ipsam veritatis cum aut in natus, fuga voluptates, qui molestiae unde laborum. Quos!
        </p>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum nulla dicta ratione nesciunt. Nulla consequuntur illo reiciendis ullam. Perferendis quidem explicabo ducimus quaerat? Cupiditate perspiciatis qui optio veniam possimus doloremque!
        </p>
    </section>

export const History = () =>
    <section className="history">
        <h2>History of our Company</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis expedita quam consectetur officiis? Ex, itaque officiis debitis culpa esse temporibus rerum est dignissimos nisi provident nemo voluptate impedit at repellat, eius nulla aspernatur possimus saepe amet repudiandae nobis vel maiores eos officia? Consequatur voluptate impedit veniam soluta consequuntur officia natus, est magni magnam nihil officiis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia esse, modi, atque vitae voluptatum cupiditate porro suscipit, doloribus corrupti quae. Voluptates, sequi repellat. Harum eaque dicta quos aspernatur suscipit, quidem tenetur magnam molestiae optio rem delectus est autem. A debitis pariatur facilis, cumque minima ut tenetur in voluptas, consectetur aut maiores eveniet corrupti nostrum ipsa quod? Aut, praesentium animi?</p>
    </section>

export const Services = () =>
    <section className="services">
        <h2>Services wich we provide</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem est explicabo debitis cumque laudantium, molestias velit repudiandae, necessitatibus aliquam autem quo dolores officiis nisi dolore quaerat labore laboriosam omnis ab? Nulla facilis neque quam suscipit molestias doloribus assumenda expedita at!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quis nisi aliquid tempora dolorem itaque magnam ab, excepturi eius deleniti numquam ea sit, repellendus, neque ad expedita.</p>
    </section>

export const Location = () =>
    <section className="location">
        <h2>Our location</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, delectus incidunt rem neque officiis expedita!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, aliquam!</p>
    </section>

