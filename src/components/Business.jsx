import {features} from '../constants'
import styles,{layout} from '../style'
import Button from '../components/Button'
import React from 'react'

const FeatureCard = ({feature,key,index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index!==feature.length-1?'mb-6':'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}>
      <img src={feature.icon} alt="icon" className='w-[50%] object-contain h-[50%]' />
    </div>
    <div className={`flex-1 flex flex-col ml-3`}>
        <h4 className={`font-poppins font-semibold text-white leading-[23px] text-[18px] mb-1`}>
          {feature.title}
        </h4>
        <p className={`font-poppins font-normal text-dimWhite leading-[24px] text-[16px] mb-1`}>
          {feature.content}
        </p>
    </div>
  </div>
)
  
    


const Business = () => {
  return (
    <section id='features' className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
          <h2 className={`${styles.heading2}`}>
            You do the business,<br className='sm:block hidden'/> we'll handle the money.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
          </p>
          <Button styles="mt-10"/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature,idx)=>(
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
      </div>
    </section>
  )
}

export default Business