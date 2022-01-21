import React from "react";
import "./App.css";
import Card from './Card';

function App() {
  return (
    <div>
    <h2><b/>Related Posts</h2>
    <div>
  <Card image="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a3RtfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  head="What do you want to know about Bikes?"
  description="A motorcycle is a vehicle used to transport people from one place to another."
  link="https://en.wikipedia.org/wiki/Motorcycle"
  />
  <Card image="https://d1ymz67w5raq8g.cloudfront.net/Pictures/480xany/3/4/2/513342_gettyimages1053776630_690692.jpg"
  head="What do you want to know about Ice-Cream?"
  description="Ice cream is a sweetened frozen food typically eaten as a snack or dessert."
  link="https://www.britannica.com/topic/ice-cream"
  />
  <Card image="https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg"
  head="What do you want to know about Pizza?"
  description="The amazing thing about pizza is that it's delicious no matter what time of day you eat it."
  link="https://www.britannica.com/topic/pizza"
  />
  </div>
  <div className="footer">
    <p>If you want to show some love, press L. ❤️</p>
     <p>Please write a comment with your opinion too. 📝</p>
     <p>Have a nice day! ☀️</p>
  </div>
</div>
  );
}

export default App;
