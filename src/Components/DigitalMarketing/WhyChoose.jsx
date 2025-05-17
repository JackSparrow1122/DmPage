import React from 'react'
import chooseImg from '../../assets/WhyChooseUs.png' // ✅ Step 1

const WhyChoose = () => {
  return (
    <div className="w-full flex justify-center items-center pt-6 bg-[#141311]">
      <img
        src={chooseImg}
        alt="Why Choose Us"
        className="max-w-full h-auto rounded-xl shadow-lg"
      />
    </div>
  )
}

export default WhyChoose
