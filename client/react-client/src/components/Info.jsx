// import React from 'react';
import React, { Component } from 'react';

class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="picInfo"> 
<div className="cards">
<ul className="cards">
        <li>
          <a href className="card">
            <img src="data:image/jpeg;base64,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" className="card__image" alt=""  />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <img className="card__thumb" src="https://lh3.googleusercontent.com/v_La9fN347Xp4mx5YTP09ifrzdGV-0FO3_MZym9Qimvi1MmCdgGz3gPU72i6nIgRkbjmWsBQ82Hi7AIObAOF9bGfl8zHPoxgLn2ihp2aXFl5WggpmOAScplBcHJvzCxwWeSUZLdrT03_Uszc8n1-2UxCgA53tdICsRS6tN9ZXKZjC-nv5vZ6m95q5fG9kWUy67U8vkgJcOIw8gZNcZJDUAqKF-dnqiEu2Xtwp8XTAzrVUG7RhXChgOilRimKp0KirWeherwyet3dSYUzuA_sfPp_RHizT9S7cuRiLken0ztD05JWogtDdhbHd9vJQVa2isw4Sq6MlwZxsGG1yWYO_DJaAI9uXK8bDpMcY6bVLDMBwiadXuvv5R7h49mw9U1Co8Xhez-Iy03xoSvR6l73yxiia_hlSM-d6vm6lfYg0MJ74TH6rVfDlQPcxtQzQ_6naLB30w74l7CD5EfkwEhmO8DkaL3Iz24R5SQYMP_OKdS6lX4r7RwLg0jyBv_PX_6iyMRMWn8vkF7yvq1xoMwmsfClS2FvJzBRFqurwPPBMg7MRmgXNjN9DAH9Pt2rdrTxxp-gAynS6cM3Ukb57oUDprqKIBlo1mv8_pPobY4LYW1Rl5OgnIy4lX8B0MR9ChGruUT3keIMTIDdbNSnQbcDWyEMwWUym6zDSyUZgHRQUnbs0TaFoLJ41gNC3zMmXYHSGgDHhZcHxleQpCYainqe_60=w317-h238-no?authuser=0" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">Awake</h3>            
                  <span className="card__status">Drama </span>
                </div>
              </div>
              <p className="card__description">With humankind unable to sleep and think clearly, growing increasingly irrational and violent </p>
            </div>
          </a>      
        </li>
        <li>
          <a href className="card">
            <img src="https://i.pinimg.com/originals/8d/fe/3f/8dfe3fbb8995af7e690fe8f0ae3f1704.jpg" className="card__image" alt="" />
            <div className="card__overlay">        
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                <img className="card__thumb" src="https://lh3.googleusercontent.com/v_La9fN347Xp4mx5YTP09ifrzdGV-0FO3_MZym9Qimvi1MmCdgGz3gPU72i6nIgRkbjmWsBQ82Hi7AIObAOF9bGfl8zHPoxgLn2ihp2aXFl5WggpmOAScplBcHJvzCxwWeSUZLdrT03_Uszc8n1-2UxCgA53tdICsRS6tN9ZXKZjC-nv5vZ6m95q5fG9kWUy67U8vkgJcOIw8gZNcZJDUAqKF-dnqiEu2Xtwp8XTAzrVUG7RhXChgOilRimKp0KirWeherwyet3dSYUzuA_sfPp_RHizT9S7cuRiLken0ztD05JWogtDdhbHd9vJQVa2isw4Sq6MlwZxsGG1yWYO_DJaAI9uXK8bDpMcY6bVLDMBwiadXuvv5R7h49mw9U1Co8Xhez-Iy03xoSvR6l73yxiia_hlSM-d6vm6lfYg0MJ74TH6rVfDlQPcxtQzQ_6naLB30w74l7CD5EfkwEhmO8DkaL3Iz24R5SQYMP_OKdS6lX4r7RwLg0jyBv_PX_6iyMRMWn8vkF7yvq1xoMwmsfClS2FvJzBRFqurwPPBMg7MRmgXNjN9DAH9Pt2rdrTxxp-gAynS6cM3Ukb57oUDprqKIBlo1mv8_pPobY4LYW1Rl5OgnIy4lX8B0MR9ChGruUT3keIMTIDdbNSnQbcDWyEMwWUym6zDSyUZgHRQUnbs0TaFoLJ41gNC3zMmXYHSGgDHhZcHxleQpCYainqe_60=w317-h238-no?authuser=0" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">Joker</h3>
                  <span className="card__status">ACTION</span>
                </div>
              </div>
              <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>
        </li>
        <li>
          <a href className="card">
            <img src="https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg" className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <img className="card__thumb" src="https://lh3.googleusercontent.com/v_La9fN347Xp4mx5YTP09ifrzdGV-0FO3_MZym9Qimvi1MmCdgGz3gPU72i6nIgRkbjmWsBQ82Hi7AIObAOF9bGfl8zHPoxgLn2ihp2aXFl5WggpmOAScplBcHJvzCxwWeSUZLdrT03_Uszc8n1-2UxCgA53tdICsRS6tN9ZXKZjC-nv5vZ6m95q5fG9kWUy67U8vkgJcOIw8gZNcZJDUAqKF-dnqiEu2Xtwp8XTAzrVUG7RhXChgOilRimKp0KirWeherwyet3dSYUzuA_sfPp_RHizT9S7cuRiLken0ztD05JWogtDdhbHd9vJQVa2isw4Sq6MlwZxsGG1yWYO_DJaAI9uXK8bDpMcY6bVLDMBwiadXuvv5R7h49mw9U1Co8Xhez-Iy03xoSvR6l73yxiia_hlSM-d6vm6lfYg0MJ74TH6rVfDlQPcxtQzQ_6naLB30w74l7CD5EfkwEhmO8DkaL3Iz24R5SQYMP_OKdS6lX4r7RwLg0jyBv_PX_6iyMRMWn8vkF7yvq1xoMwmsfClS2FvJzBRFqurwPPBMg7MRmgXNjN9DAH9Pt2rdrTxxp-gAynS6cM3Ukb57oUDprqKIBlo1mv8_pPobY4LYW1Rl5OgnIy4lX8B0MR9ChGruUT3keIMTIDdbNSnQbcDWyEMwWUym6zDSyUZgHRQUnbs0TaFoLJ41gNC3zMmXYHSGgDHhZcHxleQpCYainqe_60=w317-h238-no?authuser=0" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">CONJURING</h3>
                  <span className="card__status"> HORROR</span>
                  {/* <span className="card__tagline">Lorem ipsum dolor sit amet consectetur</span>             */}
                </div>
              </div>
              <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>
        </li>
        <li>
          <a href className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMUzrY7CbBae1BACSaRRKHLseqoxpkASfu9qPOcQW7zu00A6QRjQDREjz-vWZTcPS8gM&usqp=CAU" className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                <img className="card__thumb" src="https://lh3.googleusercontent.com/v_La9fN347Xp4mx5YTP09ifrzdGV-0FO3_MZym9Qimvi1MmCdgGz3gPU72i6nIgRkbjmWsBQ82Hi7AIObAOF9bGfl8zHPoxgLn2ihp2aXFl5WggpmOAScplBcHJvzCxwWeSUZLdrT03_Uszc8n1-2UxCgA53tdICsRS6tN9ZXKZjC-nv5vZ6m95q5fG9kWUy67U8vkgJcOIw8gZNcZJDUAqKF-dnqiEu2Xtwp8XTAzrVUG7RhXChgOilRimKp0KirWeherwyet3dSYUzuA_sfPp_RHizT9S7cuRiLken0ztD05JWogtDdhbHd9vJQVa2isw4Sq6MlwZxsGG1yWYO_DJaAI9uXK8bDpMcY6bVLDMBwiadXuvv5R7h49mw9U1Co8Xhez-Iy03xoSvR6l73yxiia_hlSM-d6vm6lfYg0MJ74TH6rVfDlQPcxtQzQ_6naLB30w74l7CD5EfkwEhmO8DkaL3Iz24R5SQYMP_OKdS6lX4r7RwLg0jyBv_PX_6iyMRMWn8vkF7yvq1xoMwmsfClS2FvJzBRFqurwPPBMg7MRmgXNjN9DAH9Pt2rdrTxxp-gAynS6cM3Ukb57oUDprqKIBlo1mv8_pPobY4LYW1Rl5OgnIy4lX8B0MR9ChGruUT3keIMTIDdbNSnQbcDWyEMwWUym6zDSyUZgHRQUnbs0TaFoLJ41gNC3zMmXYHSGgDHhZcHxleQpCYainqe_60=w317-h238-no?authuser=0" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">Shoot em up </h3>
                  <span className="card__status">Action</span>
                </div>          
              </div>
              <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>
        </li>    
        <li>
          <a href className="card">
            <img src="https://images.redbox.com/Images/EPC/boxArtVertical/7168.jpg" className="card__image" alt=""  />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <img className="card__thumb" src="https://lh3.googleusercontent.com/v_La9fN347Xp4mx5YTP09ifrzdGV-0FO3_MZym9Qimvi1MmCdgGz3gPU72i6nIgRkbjmWsBQ82Hi7AIObAOF9bGfl8zHPoxgLn2ihp2aXFl5WggpmOAScplBcHJvzCxwWeSUZLdrT03_Uszc8n1-2UxCgA53tdICsRS6tN9ZXKZjC-nv5vZ6m95q5fG9kWUy67U8vkgJcOIw8gZNcZJDUAqKF-dnqiEu2Xtwp8XTAzrVUG7RhXChgOilRimKp0KirWeherwyet3dSYUzuA_sfPp_RHizT9S7cuRiLken0ztD05JWogtDdhbHd9vJQVa2isw4Sq6MlwZxsGG1yWYO_DJaAI9uXK8bDpMcY6bVLDMBwiadXuvv5R7h49mw9U1Co8Xhez-Iy03xoSvR6l73yxiia_hlSM-d6vm6lfYg0MJ74TH6rVfDlQPcxtQzQ_6naLB30w74l7CD5EfkwEhmO8DkaL3Iz24R5SQYMP_OKdS6lX4r7RwLg0jyBv_PX_6iyMRMWn8vkF7yvq1xoMwmsfClS2FvJzBRFqurwPPBMg7MRmgXNjN9DAH9Pt2rdrTxxp-gAynS6cM3Ukb57oUDprqKIBlo1mv8_pPobY4LYW1Rl5OgnIy4lX8B0MR9ChGruUT3keIMTIDdbNSnQbcDWyEMwWUym6zDSyUZgHRQUnbs0TaFoLJ41gNC3zMmXYHSGgDHhZcHxleQpCYainqe_60=w317-h238-no?authuser=0" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">FAMILY</h3>            
                  <span className="card__status">COMEDY </span>
                </div>
              </div>
              <p className="card__description">With humankind unable to sleep and think clearly, growing increasingly irrational and violent </p>
            </div>
          </a>      
        </li>
        <li>
          <a href className="card">
            <img src="https://media.senscritique.com/media/000020131614/source_big/The_King_s_Man_Premiere_mission.jpg" className="card__image" alt=""  />
            <div className="card__overlay">        
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                <img className="card__thumb" src="https://lh3.googleusercontent.com/v_La9fN347Xp4mx5YTP09ifrzdGV-0FO3_MZym9Qimvi1MmCdgGz3gPU72i6nIgRkbjmWsBQ82Hi7AIObAOF9bGfl8zHPoxgLn2ihp2aXFl5WggpmOAScplBcHJvzCxwWeSUZLdrT03_Uszc8n1-2UxCgA53tdICsRS6tN9ZXKZjC-nv5vZ6m95q5fG9kWUy67U8vkgJcOIw8gZNcZJDUAqKF-dnqiEu2Xtwp8XTAzrVUG7RhXChgOilRimKp0KirWeherwyet3dSYUzuA_sfPp_RHizT9S7cuRiLken0ztD05JWogtDdhbHd9vJQVa2isw4Sq6MlwZxsGG1yWYO_DJaAI9uXK8bDpMcY6bVLDMBwiadXuvv5R7h49mw9U1Co8Xhez-Iy03xoSvR6l73yxiia_hlSM-d6vm6lfYg0MJ74TH6rVfDlQPcxtQzQ_6naLB30w74l7CD5EfkwEhmO8DkaL3Iz24R5SQYMP_OKdS6lX4r7RwLg0jyBv_PX_6iyMRMWn8vkF7yvq1xoMwmsfClS2FvJzBRFqurwPPBMg7MRmgXNjN9DAH9Pt2rdrTxxp-gAynS6cM3Ukb57oUDprqKIBlo1mv8_pPobY4LYW1Rl5OgnIy4lX8B0MR9ChGruUT3keIMTIDdbNSnQbcDWyEMwWUym6zDSyUZgHRQUnbs0TaFoLJ41gNC3zMmXYHSGgDHhZcHxleQpCYainqe_60=w317-h238-no?authuser=0" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">THE KING'S MAN</h3>
                  <span className="card__status">POLICE</span>
                </div>
              </div>
              <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>
        </li>
        <li>
          <a href className="card">
            <img src="https://mobilewallpaperhd.com/wp-content/uploads/2021/03/The-Batman-Wallpaper-485x1024.jpg" className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <img className="card__thumb" src="https://lh3.googleusercontent.com/v_La9fN347Xp4mx5YTP09ifrzdGV-0FO3_MZym9Qimvi1MmCdgGz3gPU72i6nIgRkbjmWsBQ82Hi7AIObAOF9bGfl8zHPoxgLn2ihp2aXFl5WggpmOAScplBcHJvzCxwWeSUZLdrT03_Uszc8n1-2UxCgA53tdICsRS6tN9ZXKZjC-nv5vZ6m95q5fG9kWUy67U8vkgJcOIw8gZNcZJDUAqKF-dnqiEu2Xtwp8XTAzrVUG7RhXChgOilRimKp0KirWeherwyet3dSYUzuA_sfPp_RHizT9S7cuRiLken0ztD05JWogtDdhbHd9vJQVa2isw4Sq6MlwZxsGG1yWYO_DJaAI9uXK8bDpMcY6bVLDMBwiadXuvv5R7h49mw9U1Co8Xhez-Iy03xoSvR6l73yxiia_hlSM-d6vm6lfYg0MJ74TH6rVfDlQPcxtQzQ_6naLB30w74l7CD5EfkwEhmO8DkaL3Iz24R5SQYMP_OKdS6lX4r7RwLg0jyBv_PX_6iyMRMWn8vkF7yvq1xoMwmsfClS2FvJzBRFqurwPPBMg7MRmgXNjN9DAH9Pt2rdrTxxp-gAynS6cM3Ukb57oUDprqKIBlo1mv8_pPobY4LYW1Rl5OgnIy4lX8B0MR9ChGruUT3keIMTIDdbNSnQbcDWyEMwWUym6zDSyUZgHRQUnbs0TaFoLJ41gNC3zMmXYHSGgDHhZcHxleQpCYainqe_60=w317-h238-no?authuser=0" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">BATMAN</h3>
                  <span className="card__status"> ACTION</span>
                  {/* <span className="card__tagline">Lorem ipsum dolor sit amet consectetur</span>             */}
                </div>
              </div>
              <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>
        </li>
        <li>
          <a href className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmyQohCNUMXijA2gTpOAfZkRGANmnYfaWoIH8jJIMiCRZZ4CI6MHtsg_AYCiqwdgA8CM&usqp=CAU" className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                <img className="card__thumb" src="https://lh3.googleusercontent.com/v_La9fN347Xp4mx5YTP09ifrzdGV-0FO3_MZym9Qimvi1MmCdgGz3gPU72i6nIgRkbjmWsBQ82Hi7AIObAOF9bGfl8zHPoxgLn2ihp2aXFl5WggpmOAScplBcHJvzCxwWeSUZLdrT03_Uszc8n1-2UxCgA53tdICsRS6tN9ZXKZjC-nv5vZ6m95q5fG9kWUy67U8vkgJcOIw8gZNcZJDUAqKF-dnqiEu2Xtwp8XTAzrVUG7RhXChgOilRimKp0KirWeherwyet3dSYUzuA_sfPp_RHizT9S7cuRiLken0ztD05JWogtDdhbHd9vJQVa2isw4Sq6MlwZxsGG1yWYO_DJaAI9uXK8bDpMcY6bVLDMBwiadXuvv5R7h49mw9U1Co8Xhez-Iy03xoSvR6l73yxiia_hlSM-d6vm6lfYg0MJ74TH6rVfDlQPcxtQzQ_6naLB30w74l7CD5EfkwEhmO8DkaL3Iz24R5SQYMP_OKdS6lX4r7RwLg0jyBv_PX_6iyMRMWn8vkF7yvq1xoMwmsfClS2FvJzBRFqurwPPBMg7MRmgXNjN9DAH9Pt2rdrTxxp-gAynS6cM3Ukb57oUDprqKIBlo1mv8_pPobY4LYW1Rl5OgnIy4lX8B0MR9ChGruUT3keIMTIDdbNSnQbcDWyEMwWUym6zDSyUZgHRQUnbs0TaFoLJ41gNC3zMmXYHSGgDHhZcHxleQpCYainqe_60=w317-h238-no?authuser=0" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">THE BEGGINING </h3>
                  <span className="card__status">CRIME</span>
                </div>          
              </div>
              <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>
        </li>    
        <li>
          <a href className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCr9XBNsKLTG0B_NxoaLQ_spOcOsXaBR8Wfw&usqp=CAU" className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                <img className="card__thumb" src="https://lh3.googleusercontent.com/v_La9fN347Xp4mx5YTP09ifrzdGV-0FO3_MZym9Qimvi1MmCdgGz3gPU72i6nIgRkbjmWsBQ82Hi7AIObAOF9bGfl8zHPoxgLn2ihp2aXFl5WggpmOAScplBcHJvzCxwWeSUZLdrT03_Uszc8n1-2UxCgA53tdICsRS6tN9ZXKZjC-nv5vZ6m95q5fG9kWUy67U8vkgJcOIw8gZNcZJDUAqKF-dnqiEu2Xtwp8XTAzrVUG7RhXChgOilRimKp0KirWeherwyet3dSYUzuA_sfPp_RHizT9S7cuRiLken0ztD05JWogtDdhbHd9vJQVa2isw4Sq6MlwZxsGG1yWYO_DJaAI9uXK8bDpMcY6bVLDMBwiadXuvv5R7h49mw9U1Co8Xhez-Iy03xoSvR6l73yxiia_hlSM-d6vm6lfYg0MJ74TH6rVfDlQPcxtQzQ_6naLB30w74l7CD5EfkwEhmO8DkaL3Iz24R5SQYMP_OKdS6lX4r7RwLg0jyBv_PX_6iyMRMWn8vkF7yvq1xoMwmsfClS2FvJzBRFqurwPPBMg7MRmgXNjN9DAH9Pt2rdrTxxp-gAynS6cM3Ukb57oUDprqKIBlo1mv8_pPobY4LYW1Rl5OgnIy4lX8B0MR9ChGruUT3keIMTIDdbNSnQbcDWyEMwWUym6zDSyUZgHRQUnbs0TaFoLJ41gNC3zMmXYHSGgDHhZcHxleQpCYainqe_60=w317-h238-no?authuser=0" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">THE TOMORROW WAR </h3>
                  <span className="card__status">ACTION</span>
                </div>          
              </div>
              <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>
        </li>    
        <li>
          <a href className="card">
            <img src="https://i.pinimg.com/474x/4c/5a/4d/4c5a4dddbe33d4b3974f87ef90489a90.jpg" className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                <img className="card__thumb" src="https://lh3.googleusercontent.com/v_La9fN347Xp4mx5YTP09ifrzdGV-0FO3_MZym9Qimvi1MmCdgGz3gPU72i6nIgRkbjmWsBQ82Hi7AIObAOF9bGfl8zHPoxgLn2ihp2aXFl5WggpmOAScplBcHJvzCxwWeSUZLdrT03_Uszc8n1-2UxCgA53tdICsRS6tN9ZXKZjC-nv5vZ6m95q5fG9kWUy67U8vkgJcOIw8gZNcZJDUAqKF-dnqiEu2Xtwp8XTAzrVUG7RhXChgOilRimKp0KirWeherwyet3dSYUzuA_sfPp_RHizT9S7cuRiLken0ztD05JWogtDdhbHd9vJQVa2isw4Sq6MlwZxsGG1yWYO_DJaAI9uXK8bDpMcY6bVLDMBwiadXuvv5R7h49mw9U1Co8Xhez-Iy03xoSvR6l73yxiia_hlSM-d6vm6lfYg0MJ74TH6rVfDlQPcxtQzQ_6naLB30w74l7CD5EfkwEhmO8DkaL3Iz24R5SQYMP_OKdS6lX4r7RwLg0jyBv_PX_6iyMRMWn8vkF7yvq1xoMwmsfClS2FvJzBRFqurwPPBMg7MRmgXNjN9DAH9Pt2rdrTxxp-gAynS6cM3Ukb57oUDprqKIBlo1mv8_pPobY4LYW1Rl5OgnIy4lX8B0MR9ChGruUT3keIMTIDdbNSnQbcDWyEMwWUym6zDSyUZgHRQUnbs0TaFoLJ41gNC3zMmXYHSGgDHhZcHxleQpCYainqe_60=w317-h238-no?authuser=0" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">RISE OF THE Guardians </h3>
                  <span className="card__status">CARTOON</span>
                </div>          
              </div>
              <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>
        </li>    
        <li>
          <a href className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLwao_ww6-Y82ZFgo8F2NlJDnN5LCi3SsR1w&usqp=CAU" className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                <img className="card__thumb" src="https://lh3.googleusercontent.com/v_La9fN347Xp4mx5YTP09ifrzdGV-0FO3_MZym9Qimvi1MmCdgGz3gPU72i6nIgRkbjmWsBQ82Hi7AIObAOF9bGfl8zHPoxgLn2ihp2aXFl5WggpmOAScplBcHJvzCxwWeSUZLdrT03_Uszc8n1-2UxCgA53tdICsRS6tN9ZXKZjC-nv5vZ6m95q5fG9kWUy67U8vkgJcOIw8gZNcZJDUAqKF-dnqiEu2Xtwp8XTAzrVUG7RhXChgOilRimKp0KirWeherwyet3dSYUzuA_sfPp_RHizT9S7cuRiLken0ztD05JWogtDdhbHd9vJQVa2isw4Sq6MlwZxsGG1yWYO_DJaAI9uXK8bDpMcY6bVLDMBwiadXuvv5R7h49mw9U1Co8Xhez-Iy03xoSvR6l73yxiia_hlSM-d6vm6lfYg0MJ74TH6rVfDlQPcxtQzQ_6naLB30w74l7CD5EfkwEhmO8DkaL3Iz24R5SQYMP_OKdS6lX4r7RwLg0jyBv_PX_6iyMRMWn8vkF7yvq1xoMwmsfClS2FvJzBRFqurwPPBMg7MRmgXNjN9DAH9Pt2rdrTxxp-gAynS6cM3Ukb57oUDprqKIBlo1mv8_pPobY4LYW1Rl5OgnIy4lX8B0MR9ChGruUT3keIMTIDdbNSnQbcDWyEMwWUym6zDSyUZgHRQUnbs0TaFoLJ41gNC3zMmXYHSGgDHhZcHxleQpCYainqe_60=w317-h238-no?authuser=0" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">JUNGLE RUN </h3>
                  <span className="card__status"> ADVENTURE</span>
                </div>          
              </div>
              <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>
        </li>    
        <li>
          <a href className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvzxm6w3HTi5ubMl_o_ytGV_E03g05fKQ86g&usqp=CAU" className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                <img className="card__thumb" src="https://lh3.googleusercontent.com/v_La9fN347Xp4mx5YTP09ifrzdGV-0FO3_MZym9Qimvi1MmCdgGz3gPU72i6nIgRkbjmWsBQ82Hi7AIObAOF9bGfl8zHPoxgLn2ihp2aXFl5WggpmOAScplBcHJvzCxwWeSUZLdrT03_Uszc8n1-2UxCgA53tdICsRS6tN9ZXKZjC-nv5vZ6m95q5fG9kWUy67U8vkgJcOIw8gZNcZJDUAqKF-dnqiEu2Xtwp8XTAzrVUG7RhXChgOilRimKp0KirWeherwyet3dSYUzuA_sfPp_RHizT9S7cuRiLken0ztD05JWogtDdhbHd9vJQVa2isw4Sq6MlwZxsGG1yWYO_DJaAI9uXK8bDpMcY6bVLDMBwiadXuvv5R7h49mw9U1Co8Xhez-Iy03xoSvR6l73yxiia_hlSM-d6vm6lfYg0MJ74TH6rVfDlQPcxtQzQ_6naLB30w74l7CD5EfkwEhmO8DkaL3Iz24R5SQYMP_OKdS6lX4r7RwLg0jyBv_PX_6iyMRMWn8vkF7yvq1xoMwmsfClS2FvJzBRFqurwPPBMg7MRmgXNjN9DAH9Pt2rdrTxxp-gAynS6cM3Ukb57oUDprqKIBlo1mv8_pPobY4LYW1Rl5OgnIy4lX8B0MR9ChGruUT3keIMTIDdbNSnQbcDWyEMwWUym6zDSyUZgHRQUnbs0TaFoLJ41gNC3zMmXYHSGgDHhZcHxleQpCYainqe_60=w317-h238-no?authuser=0" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">FEAR</h3>
                  <span className="card__status">ACTION </span>
                </div>          
              </div>
              <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>
        </li>    
        <li>
          <a href className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi98lB6isvT9k9TX17Xqq0AytHlX28FRrXcg&usqp=CAU" className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                <img className="card__thumb" src="https://lh3.googleusercontent.com/v_La9fN347Xp4mx5YTP09ifrzdGV-0FO3_MZym9Qimvi1MmCdgGz3gPU72i6nIgRkbjmWsBQ82Hi7AIObAOF9bGfl8zHPoxgLn2ihp2aXFl5WggpmOAScplBcHJvzCxwWeSUZLdrT03_Uszc8n1-2UxCgA53tdICsRS6tN9ZXKZjC-nv5vZ6m95q5fG9kWUy67U8vkgJcOIw8gZNcZJDUAqKF-dnqiEu2Xtwp8XTAzrVUG7RhXChgOilRimKp0KirWeherwyet3dSYUzuA_sfPp_RHizT9S7cuRiLken0ztD05JWogtDdhbHd9vJQVa2isw4Sq6MlwZxsGG1yWYO_DJaAI9uXK8bDpMcY6bVLDMBwiadXuvv5R7h49mw9U1Co8Xhez-Iy03xoSvR6l73yxiia_hlSM-d6vm6lfYg0MJ74TH6rVfDlQPcxtQzQ_6naLB30w74l7CD5EfkwEhmO8DkaL3Iz24R5SQYMP_OKdS6lX4r7RwLg0jyBv_PX_6iyMRMWn8vkF7yvq1xoMwmsfClS2FvJzBRFqurwPPBMg7MRmgXNjN9DAH9Pt2rdrTxxp-gAynS6cM3Ukb57oUDprqKIBlo1mv8_pPobY4LYW1Rl5OgnIy4lX8B0MR9ChGruUT3keIMTIDdbNSnQbcDWyEMwWUym6zDSyUZgHRQUnbs0TaFoLJ41gNC3zMmXYHSGgDHhZcHxleQpCYainqe_60=w317-h238-no?authuser=0" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">BUCKSKIN</h3>
                  <span className="card__status">ACTION</span>
                </div>          
              </div>
              <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>
        </li>    
        <li>
          <a href className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSerJtWDfZPBo50ZG60z79qFAJJz52y6jSP9MZSxWACP45DDPfaSkCV3iypJtBRfJeuk&usqp=CAU" className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                <img className="card__thumb" src="https://lh3.googleusercontent.com/v_La9fN347Xp4mx5YTP09ifrzdGV-0FO3_MZym9Qimvi1MmCdgGz3gPU72i6nIgRkbjmWsBQ82Hi7AIObAOF9bGfl8zHPoxgLn2ihp2aXFl5WggpmOAScplBcHJvzCxwWeSUZLdrT03_Uszc8n1-2UxCgA53tdICsRS6tN9ZXKZjC-nv5vZ6m95q5fG9kWUy67U8vkgJcOIw8gZNcZJDUAqKF-dnqiEu2Xtwp8XTAzrVUG7RhXChgOilRimKp0KirWeherwyet3dSYUzuA_sfPp_RHizT9S7cuRiLken0ztD05JWogtDdhbHd9vJQVa2isw4Sq6MlwZxsGG1yWYO_DJaAI9uXK8bDpMcY6bVLDMBwiadXuvv5R7h49mw9U1Co8Xhez-Iy03xoSvR6l73yxiia_hlSM-d6vm6lfYg0MJ74TH6rVfDlQPcxtQzQ_6naLB30w74l7CD5EfkwEhmO8DkaL3Iz24R5SQYMP_OKdS6lX4r7RwLg0jyBv_PX_6iyMRMWn8vkF7yvq1xoMwmsfClS2FvJzBRFqurwPPBMg7MRmgXNjN9DAH9Pt2rdrTxxp-gAynS6cM3Ukb57oUDprqKIBlo1mv8_pPobY4LYW1Rl5OgnIy4lX8B0MR9ChGruUT3keIMTIDdbNSnQbcDWyEMwWUym6zDSyUZgHRQUnbs0TaFoLJ41gNC3zMmXYHSGgDHhZcHxleQpCYainqe_60=w317-h238-no?authuser=0" alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">BLACK WIDOW </h3>
                  <span className="card__status">ACTION</span>
                </div>          
              </div>
              <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
            </div>
          </a>
        </li>    
      </ul>
</div>
      </div>
    );
  }
}
export default Info; 