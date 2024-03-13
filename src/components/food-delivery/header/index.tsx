import React from "react";

export default function Header() {
  return (
    <div className="grid grid-cols-12 relative z-[999] justify-between items-center">
      <div className="col-start-1 col-end-8">
        <div className="flex justify-between items-center gap-6">
          <div className="flex justify-between items-center gap-1">
            <img src="/images/headerMenu/logo-one.svg" alt="logo-one" />
            <img src="/images/headerMenu/logo-two.svg" alt="logo-two" />
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="flex justify-center items-center gap-3">
              <img
                src="/images/headerMenu/icons/categories.svg"
                alt="logo-one"
              />
              <span className="text-primary-primaryOne font-semibold gap-3">
                Categorys
              </span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <img src="/images/headerMenu/icons/phone.svg" alt="logo-one" />
              <span className="text-primary-primaryOne font-semibold">
                Contact Us
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <img src="/images/headerMenu/icons/facebook.svg" alt="facebook" />
            <img src="/images/headerMenu/icons/youTube.svg" alt="youTube" />
            <img src="/images/headerMenu/icons/twitter.svg" alt="twitter" />
            <img src="/images/headerMenu/icons/instagram.svg" alt="instagram" />
            <img src="/images/headerMenu/icons/linkedin.svg" alt="linkedin" />
          </div>
        </div>
      </div>
      <div className="col-start-10 col-end-13">
        <div className="flex justify-end items-center gap-10">
          <div>
            <img
              src="/images/headerMenu/icons/basket.svg"
              alt="basket"
              className="w-[34px] h-[34px]"
            />
          </div>
          <div>
            <button className="bg-primary-primaryOne text-white w-[171px] h-[70px] rounded-xl buttom-radius">
              Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
