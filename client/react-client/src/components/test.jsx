<ul className="cards">
        <li>
          <a href className="card">
            <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">Jessica Parker</h3>            
                  <span className="card__status">1 hour ago</span>
                </div>
              </div>
              <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>      
        </li>
        <li>
          <a href className="card">
            <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
            <div className="card__overlay">        
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">kim Cattrall</h3>
                  <span className="card__status">3 hours ago</span>
                </div>
              </div>
              <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>
        </li>
        <li>
          <a href className="card">
            <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">Jessica Parker</h3>
                  <span className="card__tagline">Lorem ipsum dolor sit amet consectetur</span>            
                  <span className="card__status">1 hour ago</span>
                </div>
              </div>
              <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>
        </li>
        <li>
          <a href className="card">
            <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">kim Cattrall</h3>
                  <span className="card__status">3 hours ago</span>
                </div>          
              </div>
              <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>
        </li>    
      </ul>







// :root {
//     --surface-color: #fff;
//     --curve: 40;
//   }
  
//   * {
//     box-sizing: border-box;
//   }
  
//   body {
//     font-family: "Noto Sans JP", sans-serif;
//     background-color: #fef8f8;
//   }
  
//   .cards {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//     gap: 2rem;
//     margin: 4rem 5vw;
//     padding: 0;
//     list-style-type: none;
//   }
  
//   .card {
//     position: relative;
//     display: block;
//     height: 100%;
//     border-radius: calc(var(--curve) * 1px);
//     overflow: hidden;
//     text-decoration: none;
//   }
  
//   .card__image {
//     width: 100%;
//     height: auto;
//   }
  
//   .card__overlay {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     z-index: 1;
//     border-radius: calc(var(--curve) * 1px);
//     background-color: var(--surface-color);
//     transform: translateY(100%);
//     transition: 0.2s ease-in-out;
//   }
  
//   .card:hover .card__overlay {
//     transform: translateY(0);
//   }
  
//   .card__header {
//     position: relative;
//     display: flex;
//     align-items: center;
//     gap: 2em;
//     padding: 2em;
//     border-radius: calc(var(--curve) * 1px) 0 0 0;
//     background-color: var(--surface-color);
//     transform: translateY(-100%);
//     transition: 0.2s ease-in-out;
//   }
  
//   .card__arc {
//     width: 80px;
//     height: 80px;
//     position: absolute;
//     bottom: 100%;
//     right: 0;
//     z-index: 1;
//   }
  
//   .card__arc path {
//     fill: var(--surface-color);
//     d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
//   }
  
//   .card:hover .card__header {
//     transform: translateY(0);
//   }
  
//   .card__thumb {
//     flex-shrink: 0;
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//   }
  
//   .card__title {
//     font-size: 1em;
//     margin: 0 0 0.3em;
//     color: #6a515e;
//   }
  
//   .card__tagline {
//     display: block;
//     margin: 1em 0;
//     font-family: "MockFlowFont";
//     font-size: 0.8em;
//     color: #d7bdca;
//   }
  
//   .card__status {
//     font-size: 0.8em;
//     color: #d7bdca;
//   }
  
//   .card__description {
//     padding: 0 2em 2em;
//     margin: 0;
//     color: #d7bdca;
//     font-family: "MockFlowFont";
//     display: -webkit-box;
//     -webkit-box-orient: vertical;
//     -webkit-line-clamp: 3;
//     overflow: hidden;
//   }