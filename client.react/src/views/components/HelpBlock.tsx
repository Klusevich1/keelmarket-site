import React from 'react'
import Research from '../../resources/images/research.svg'
import Star from '../../resources/images/star.svg'
import WorldBall from '../../resources/images/worldball.svg'
import Settings from '../../resources/images/settings.svg'
import '../../resources/css/HelpBlock.css'


export const HelpBlock = () => {
  return (
    <div className='help-container'>
        <div className='help-first-block'>
            <h4>How we help</h4>
            <p>We have the right tools to conduct automotive market research, whether your focus is private or commercial drivers, fleet managers, policy makers or external stakeholders.</p>
        </div>
        <div className='help-list'>
            <div>
                <div className='help-image-block'>
                    <img src={Research} alt="Star" />
                </div>
                <div className='help-text-block'>
                    <h4>Market research</h4>
                    <span>Research of existing and potential markets for the sale and purchase of car parts, identification of existing and future competitors, identification and analysis of the prices of their goods and services.</span>
                </div>
            </div>
            <div>
                <div className='help-image-block'>
                    <img src={Star} alt="Star" />
                </div>
                <div className='help-text-block'>
                    <h4>Price optimisation and analysis</h4>
                    <span>Optimizing and analyzing the purchase and sale prices of goods purchased on the car parts market, in order to achieve more economically beneficial purchase and sale transactions for the Representative. Determination of the optimal trading margin. Sales strategy for the selected period.</span>
                </div>
            </div>
            <div>
                <div className='help-image-block'>
                    <img src={WorldBall} alt="Star" />
                </div>
                <div className='help-text-block'>
                    <h4>Reducing the cost of transporting goods</h4>
                    <span>Optimization of representative logistics, methods, proposals in order to reduce the costs of transportation of goods, research and comparison of the prices of companies providing transport services, in order to reduce the prices of goods delivery, transport costs.</span>
                </div>
            </div>
            <div>
                <div className='help-image-block'>
                    <img src={Settings} alt="Star" />
                </div>
                <div className='help-text-block'>
                    <h4>Quality work</h4>
                    <span>Constantly looking for manufacturers and distributors of auto parts, tyres, check the documents of the enterprise (certificates for goods, insurance policies, etc.), validity, solvency, reliability of enterprises.</span>
                </div>
            </div>
        </div>
    </div>
  )
}
