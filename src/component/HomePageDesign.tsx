import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./home-page-design.module.css";
const HomePageDesign: NextPage = () => {
  const router = useRouter();

  const onRectangle10Click = useCallback(() => {
    router.push("/components/single-product-page-design");
  }, [router]);

  const onFAQText1Click = useCallback(() => {
    router.push("/components/faqs");
  }, [router]);

  const onCONTACTText1Click = useCallback(() => {
    router.push("/components/contact-us");
  }, [router]);

  const onGroupContainer65Click = useCallback(() => {
    router.push("/components/about-us-our-mushrooms");
  }, [router]);

  return (
    <div className={styles.homePageDesign}>
      <div className={styles.homePageDesignChild} />
      <img
        className={styles.homePageDesignItem}
        alt=""
        src="/rectangle-185@2x.png"
      />
      <div className={styles.findYourGummies}>FIND YOUR GUMMIES.</div>
      <div className={styles.happiness100Guaranteed}>
        HAPPINESS 100% GUARANTEED
      </div>
      <div className={styles.pricingPlanFor}>PRICING PLAN FOR GUMMIED</div>
      <div className={styles.readWhatOur}>
        Read What Our Customers Are Saying About Our Mushroom Supplements...
      </div>
      <img
        className={styles.homePageDesignInner}
        alt=""
        src="/rectangle-1131@2x.png"
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.homePageDesignChild1} />
      <div className={styles.homePageDesignChild2} />
      <div className={styles.homePageDesignChild3} />
      <div className={styles.homePageDesignChild4} />
      <div className={styles.homePageDesignChild5} />
      <div className={styles.homePageDesignChild6} />
      <div className={styles.homePageDesignChild7} />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-1141@2x.png"
      />
      <div className={styles.loremIpsumIs}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </div>
      <div className={styles.loremIpsumIs1}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </div>
      <div className={styles.loremIpsumIs2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting indust
      </div>
      <div className={styles.loremIpsumIs3}>
        Lorem Ipsum is simply dummy text of the printing and typesetting indust
      </div>
      <div className={styles.loremIpsumIs4}>
        Lorem Ipsum is simply dummy text of the printing and typesetting indust
      </div>
      <div className={styles.loremIpsumIs5}>
        Lorem Ipsum is simply dummy text of the printing and typesetting indust
      </div>
      <div className={styles.loremIpsumIs6}>Lorem Ipsum is simpl0s</div>
      <div className={styles.loremIpsumIs7}>Lorem Ipsum is simpl0s</div>
      <div className={styles.loremIpsumIs8}>Lorem Ipsum is simpl0s</div>
      <div className={styles.loremIpsumIs9}>Lorem Ipsum is simpl0s</div>
      <div className={styles.aboutUs}>ABOUT US</div>
      <div className={styles.services}>SERVICES</div>
      <div className={styles.howItsWork}>How It’s Work</div>
      <div className={styles.ourPurchase}>OUR PURCHASE</div>
      <div className={styles.lastDiscovers}>Last Discovers</div>
      <div className={styles.testimonials}>Testimonials</div>
      <div className={styles.getStarted}>GET STARTED</div>
      <div className={styles.focus}>FOCUS</div>
      <div className={styles.stressRelief}>STRESS RELIEF</div>
      <div className={styles.stressRelief1}>STRESS RELIEF</div>
      <div className={styles.longevity}>Longevity</div>
      <img className={styles.checked11} alt="" src="/checked-1-13@2x.png" />
      <img className={styles.checked12} alt="" src="/checked-1-21@2x.png" />
      <img className={styles.checked13} alt="" src="/checked-1-31@2x.png" />
      <img className={styles.checked14} alt="" src="/checked-1-41@2x.png" />
      <div className={styles.homePageDesignChild8} />
      <div
        className={styles.homePageDesignChild9}
        onClick={onRectangle10Click}
      />
      <div className={styles.homePageDesignChild10} />
      <div className={styles.homePageDesignChild11} />
      <div className={styles.homePageDesignChild12} />
      <div className={styles.learnMore}>Learn More</div>
      <div className={styles.learnMore1}>Learn More</div>
      <div className={styles.learnMore2}>Learn More</div>
      <div className={styles.learnMore3}>Learn More</div>
      <div className={styles.learnMore4}>Learn More</div>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/vector-36.svg" />
        <img className={styles.bottle31Icon} alt="" src="/bottle3-11@2x.png" />
      </div>
      <div className={styles.vectorGroup}>
        <img className={styles.groupItem} alt="" src="/vector-63.svg" />
        <img className={styles.bottle12Icon} alt="" src="/bottle1-23@2x.png" />
      </div>
      <div className={styles.vectorContainer}>
        <img className={styles.groupInner} alt="" src="/vector-64.svg" />
        <img className={styles.bottle12Icon} alt="" src="/bottle1-24@2x.png" />
      </div>
      <div className={styles.groupDiv}>
        <img className={styles.vectorIcon} alt="" src="/vector-77.svg" />
        <img className={styles.bottle223} alt="" src="/bottle2-2-37@2x.png" />
      </div>
      <img className={styles.groupIcon} alt="" src="/group-481.svg" />
      <div className={styles.rectangleParent}>
        <img
          className={styles.groupChild1}
          alt=""
          src="/rectangle-1291@2x.png"
        />
        <div className={styles.groupChild2} />
        <div className={styles.withAuriNutritionYouAreIParent}>
          <div className={styles.withAuriNutrition}>
            With Auri Nutrition, you are in good hands
          </div>
          <div className={styles.ourPromise}>OUR PROMISE</div>
          <div className={styles.ourPromise1}>OUR PROMISE</div>
          <div className={styles.loremIpsumIs10}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            indust
          </div>
          <div className={styles.groupChild3} />
          <div className={styles.learnMore5}>Learn More</div>
        </div>
        <div className={styles.chaga}>Chaga</div>
        <img
          className={styles.imageRemovebgPreview51}
          alt=""
          src="/imageremovebgpreview-5-12@2x.png"
        />
        <img className={styles.pngegg111} alt="" src="/pngegg-11-12@2x.png" />
        <div className={styles.reishi}>Reishi</div>
        <img className={styles.pngegg91} alt="" src="/pngegg-9-12@2x.png" />
        <img className={styles.pngegg101} alt="" src="/pngegg-10-12@2x.png" />
        <div className={styles.lionsMane}>Lions Mane</div>
        <div className={styles.cordyceps}>Cordyceps</div>
      </div>
      <img className={styles.arrowIcon} alt="" src="/arrow-2.svg" />
      <div className={styles.homePageDesignChild13} />
      <div className={styles.homePageDesignChild14} />
      <div className={styles.homePageDesignChild15} />
      <div className={styles.homePageDesignChild16} />
      <div className={styles.div}>01</div>
      <div className={styles.div1}>02</div>
      <div className={styles.div2}>04</div>
      <div className={styles.div3}>03</div>
      <div className={styles.div4}>01</div>
      <div className={styles.div5}>02</div>
      <div className={styles.div6}>04</div>
      <div className={styles.div7}>03</div>
      <div className={styles.loremIspum}>lorem ispum</div>
      <div className={styles.loremIspum1}>lorem ispum</div>
      <div className={styles.loremIspum2}>lorem ispum</div>
      <div className={styles.loremIspum3}>lorem ispum</div>
      <div className={styles.loremIpsumIs11}>
        Lorem Ipsum is simply dummy text of the printing and typesetting indust
      </div>
      <div className={styles.loremIpsumIs12}>
        Lorem Ipsum is simply dummy text of the printing and typesetting indust
      </div>
      <div className={styles.loremIpsumIs13}>
        Lorem Ipsum is simply dummy text of the printing and typesetting indust
      </div>
      <div className={styles.loremIpsumIs14}>
        Lorem Ipsum is simply dummy text of the printing and typesetting indust
      </div>
      <div className={styles.frequentlyAskedQuestionParent}>
        <div className={styles.frequentlyAskedQuestion}>
          FREQUENTLY ASKED QUESTION
        </div>
        <div className={styles.faqs}>FAQs</div>
        <div className={styles.loremIpsumIs15}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          indust
        </div>
        <div className={styles.loremIpsumIs16}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          indust
        </div>
        <div className={styles.groupChild4} />
        <div className={styles.groupChild5} />
        <div className={styles.groupChild6} />
        <div className={styles.groupChild7} />
        <div className={styles.groupChild8} />
        <div className={styles.groupChild9} />
        <div className={styles.loremIspum4}>lorem ispum</div>
        <div className={styles.loremIspum5}>lorem ispum</div>
        <div className={styles.loremIspum6}>lorem ispum</div>
        <div className={styles.loremIspum7}>lorem ispum</div>
        <div className={styles.loremIspum8}>lorem ispum</div>
        <div className={styles.loremIspum9}>lorem ispum</div>
        <img className={styles.groupChild10} alt="" src="/vector-182.svg" />
        <img className={styles.groupChild11} alt="" src="/vector-231.svg" />
        <img className={styles.groupChild12} alt="" src="/vector-193.svg" />
        <img className={styles.groupChild13} alt="" src="/vector-212.svg" />
        <img className={styles.groupChild14} alt="" src="/vector-203.svg" />
        <img className={styles.groupChild15} alt="" src="/vector-222.svg" />
      </div>
      <div className={styles.homePageDesignChild17} />
      <div className={styles.allInOneGummyForSuperiorParent}>
        <div className={styles.allInOneGummyFor}>
          ALL-IN-ONE GUMMY FOR SUPERIOR HEALTH
        </div>
        <div className={styles.whyChooseUs}>WHY CHOOSE US</div>
        <div className={styles.loremIpsumIs17}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          indust
        </div>
        <div className={styles.groupChild16} />
        <div className={styles.groupChild17} />
        <div className={styles.groupChild18} />
        <b className={styles.increaseFocus}>{`Increase Focus & Memory`}</b>
        <b
          className={styles.reduceRelieve}
        >{`Reduce & Relieve Inflammation`}</b>
        <b className={styles.nonGmoprojectVerified}>NON-GMOPROJECT VERIFIED</b>
        <img
          className={styles.maskGroupIcon}
          alt=""
          src="/mask-group21@2x.png"
        />
        <img
          className={styles.maskGroupIcon1}
          alt=""
          src="/mask-group22@2x.png"
        />
        <img
          className={styles.maskGroupIcon2}
          alt=""
          src="/mask-group23@2x.png"
        />
      </div>
      <div className={styles.homePageDesignChild18} />
      <div className={styles.homePageDesignChild19} />
      <div className={styles.homePageDesignChild20} />
      <div className={styles.ellipseDiv} />
      <div className={styles.homePageDesignChild21} />
      <div className={styles.ourPurchase1}>OUR PURCHASE</div>
      <div className={styles.div8}>$ 281</div>
      <div className={styles.div9}>$ 681</div>
      <div className={styles.div10}>$ 981</div>
      <div className={styles.ourPurchase2}>OUR PURCHASE</div>
      <div className={styles.ourPurchase3}>OUR PURCHASE</div>
      <div className={styles.loremIpsumIs18}>
        Lorem Ipsum is simply dummy text of the printing and typesetting indust
      </div>
      <div className={styles.loremIpsumIs19}>
        Lorem Ipsum is simply dummy text of the printing and typesetting indust
      </div>
      <div className={styles.loremIpsumIs20}>
        Lorem Ipsum is simply dummy text of the printing and typesetting indust
      </div>
      <div className={styles.loremIpsumIsSimpl0sParent}>
        <div className={styles.loremIpsumIs21}>Lorem Ipsum is simpl0s</div>
        <div className={styles.loremIpsumIs22}>Lorem Ipsum is simpl0s</div>
        <div className={styles.loremIpsumIs23}>Lorem Ipsum is simpl0s</div>
        <div className={styles.loremIpsumIs24}>Lorem Ipsum is simpl0s</div>
        <img className={styles.checked15} alt="" src="/checked-1-5@2x.png" />
        <img className={styles.checked17} alt="" src="/checked-1-7@2x.png" />
        <img className={styles.checked18} alt="" src="/checked-1-8@2x.png" />
        <img className={styles.checked19} alt="" src="/checked-1-9@2x.png" />
      </div>
      <div className={styles.loremIpsumIsSimpl0sGroup}>
        <div className={styles.loremIpsumIs21}>Lorem Ipsum is simpl0s</div>
        <div className={styles.loremIpsumIs22}>Lorem Ipsum is simpl0s</div>
        <div className={styles.loremIpsumIs23}>Lorem Ipsum is simpl0s</div>
        <div className={styles.loremIpsumIs24}>Lorem Ipsum is simpl0s</div>
        <img className={styles.checked15} alt="" src="/checked-1-51@2x.png" />
        <img className={styles.checked17} alt="" src="/checked-1-71@2x.png" />
        <img className={styles.checked18} alt="" src="/checked-1-81@2x.png" />
        <img className={styles.checked19} alt="" src="/checked-1-91@2x.png" />
      </div>
      <div className={styles.loremIpsumIsSimpl0sContainer}>
        <div className={styles.loremIpsumIs21}>Lorem Ipsum is simpl0s</div>
        <div className={styles.loremIpsumIs22}>Lorem Ipsum is simpl0s</div>
        <div className={styles.loremIpsumIs23}>Lorem Ipsum is simpl0s</div>
        <div className={styles.loremIpsumIs24}>Lorem Ipsum is simpl0s</div>
        <img className={styles.checked15} alt="" src="/checked-1-52@2x.png" />
        <img className={styles.checked17} alt="" src="/checked-1-72@2x.png" />
        <img className={styles.checked18} alt="" src="/checked-1-82@2x.png" />
        <img className={styles.checked19} alt="" src="/checked-1-92@2x.png" />
      </div>
      <div className={styles.homePageDesignChild22} />
      <div className={styles.homePageDesignChild23} />
      <div className={styles.homePageDesignChild24} />
      <div className={styles.learnMore6}>Learn More</div>
      <div className={styles.learnMore7}>Learn More</div>
      <div className={styles.learnMore8}>Learn More</div>
      <div className={styles.vectorParent1}>
        <img className={styles.groupChild19} alt="" src="/vector-37.svg" />
        <img className={styles.bottle31Icon1} alt="" src="/bottle3-12@2x.png" />
      </div>
      <div className={styles.vectorParent2}>
        <img className={styles.groupChild20} alt="" src="/vector-65.svg" />
        <img className={styles.bottle12Icon2} alt="" src="/bottle1-25@2x.png" />
      </div>
      <div className={styles.vectorParent3}>
        <img className={styles.groupChild21} alt="" src="/vector-78.svg" />
        <img className={styles.bottle2231} alt="" src="/bottle2-2-38@2x.png" />
      </div>
      <div className={styles.homePageDesignChild25} />
      <div className={styles.homePageDesignChild26} />
      <div className={styles.homePageDesignChild27} />
      <div className={styles.homePageDesignChild28} />
      <div className={styles.homePageDesignChild29} />
      <img
        className={styles.homePageDesignChild30}
        alt=""
        src="/group-136.svg"
      />
      <div className={styles.homePageDesignChild31} />
      <div className={styles.homePageDesignChild32} />
      <img
        className={styles.homePageDesignChild33}
        alt=""
        src="/rectangle-158@2x.png"
      />
      <div className={styles.isThisThe}>
        Is this the MOMENT to Become a Brand Ambassador for Mushroom Wellness?
      </div>
      <div className={styles.loremIpsumIs33}>
        Lorem Ipsum is simply dummy text of the printing and typesetting indust
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild22} />
        <div className={styles.learnMore9}>Learn More</div>
      </div>
      <div className={styles.discoverGalleryParent}>
        <div className={styles.discoverGallery}>Discover Gallery</div>
        <div className={styles.allParent}>
          <div className={styles.all}>{`All `}</div>
          <div className={styles.immunesupport}>IMMUNESUPPORT</div>
          <div className={styles.cognitivesupport}>COGNITIVESUPPORT</div>
          <div className={styles.stressSleep}>{`STRESS& SLEEP`}</div>
          <div className={styles.fitnessRecovery}>
            <p className={styles.becomeAnRejuvenics}>{`FITNESS &RECOVERY`}</p>
          </div>
        </div>
        <img
          className={styles.groupChild23}
          alt=""
          src="/rectangle-1701@2x.png"
        />
        <img
          className={styles.groupChild24}
          alt=""
          src="/rectangle-1731@2x.png"
        />
        <div className={styles.groupChild25} />
        <div className={styles.groupChild25} />
        <img
          className={styles.groupChild27}
          alt=""
          src="/rectangle-1781@2x.png"
        />
        <img
          className={styles.groupChild28}
          alt=""
          src="/rectangle-1751@2x.png"
        />
        <img
          className={styles.groupChild29}
          alt=""
          src="/rectangle-1721@2x.png"
        />
        <img
          className={styles.groupChild30}
          alt=""
          src="/rectangle-1711@2x.png"
        />
        <div className={styles.lineDiv} />
      </div>
      <img
        className={styles.homePageDesignChild34}
        alt=""
        src="/rectangle-1761@2x.png"
      />
      <div className={styles.groupParent}>
        <div className={styles.nonGmoWrapper}>
          <div className={styles.nonGmo}>NON GMO</div>
        </div>
        <img
          className={styles.maskGroupIcon3}
          alt=""
          src="/mask-group24@2x.png"
        />
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.grainFreeWrapper}>
          <div className={styles.nonGmo}>Grain Free</div>
        </div>
        <img
          className={styles.maskGroupIcon4}
          alt=""
          src="/mask-group25@2x.png"
        />
      </div>
      <div className={styles.groupParent1}>
        <div className={styles.fruitingBodyOnlyWrapper}>
          <div className={styles.fruitingBodyOnly}>Fruiting Body Only</div>
        </div>
        <img
          className={styles.maskGroupIcon5}
          alt=""
          src="/mask-group26@2x.png"
        />
      </div>
      <div className={styles.groupParent2}>
        <div className={styles.veganWrapper}>
          <div className={styles.vegan}>Vegan</div>
        </div>
        <img
          className={styles.maskGroupIcon6}
          alt=""
          src="/mask-group27@2x.png"
        />
      </div>
      <div className={styles.homePageDesignChild35} />
      <div className={styles.homePageDesignChild36} />
      <img
        className={styles.homePageDesignChild37}
        alt=""
        src="/group-64.svg"
      />
      <div className={styles.homePageDesignChild38} />
      <div className={styles.homePageDesignChild39} />
      <div className={styles.homePageDesignChild40} />
      <div className={styles.homePageDesignChild41} />
      <img
        className={styles.homePageDesignChild42}
        alt=""
        src="/group-65.svg"
      />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-30@2x.png" />
      <img
        className={styles.homePageDesignChild43}
        alt=""
        src="/ellipse-31@2x.png"
      />
      <div className={styles.homePageDesignChild44} />
      <div className={styles.homePageDesignChild45} />
      <div className={styles.loremIpsumIsContainer}>
        <span className={styles.ofThePrinting}>{`Lorem Ipsum is simply `}</span>
        <b>{`dummy text `}</b>
        <span className={styles.ofThePrinting}>
          of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500
        </span>
      </div>
      <div className={styles.loremIpsumIsContainer1}>
        <span className={styles.ofThePrinting}>{`Lorem Ipsum is simply `}</span>
        <b>{`dummy text `}</b>
        <span className={styles.ofThePrinting}>
          of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500
        </span>
      </div>
      <b className={styles.johnDoe}>John Doe</b>
      <b className={styles.johnDoe1}>John Doe</b>
      <div className={styles.div11}>01</div>
      <div className={styles.div12}>02</div>
      <img
        className={styles.quotationMark1Icon}
        alt=""
        src="/quotationmark-1@2x.png"
      />
      <img
        className={styles.quotationMark2Icon}
        alt=""
        src="/quotationmark-2@2x.png"
      />
      <div className={styles.homePageDesignChild46} />
      <div className={styles.rejuvenicsZeroWaste}>
        Rejuvenics Zero Waste Packaging
      </div>
      <div className={styles.homeCompostablePouches}>
        100% Home Compostable Pouches To Refill Infinitely Reusable Glass Jars
      </div>
      <div className={styles.groupParent3}>
        <div className={styles.groupParent4}>
          <div className={styles.parent}>
            <b className={styles.b}>1</b>
            <div className={styles.open}>Open</div>
            <div className={styles.pouch}>pouch</div>
            <img className={styles.starIcon} alt="" src="/star-7.svg" />
          </div>
          <img className={styles.groupChild31} alt="" src="/arrow-34.svg" />
        </div>
        <div className={styles.group}>
          <b className={styles.b1}>2</b>
          <div className={styles.refill}>REFILL</div>
          <div className={styles.pouch1}>pouch</div>
          <img className={styles.groupChild32} alt="" src="/arrow-42.svg" />
          <img className={styles.jar1Icon} alt="" src="/jar-1@2x.png" />
        </div>
        <div className={styles.container}>
          <b className={styles.b2}>3</b>
          <div className={styles.compost}>COMPOST</div>
          <div className={styles.pouch2}>pouch</div>
          <img className={styles.bin1Icon} alt="" src="/bin-1@2x.png" />
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild33} />
        <b className={styles.shop}>Shop</b>
        <b className={styles.search}>Search</b>
        <b className={styles.faqs1}>FAQs</b>
        <b className={styles.privacyPolicy}>Privacy Policy</b>
        <b className={styles.stressReliefMushroom}>Stress Relief Mushroom</b>
        <b className={styles.shippingReturns}>Shipping + Returns</b>
        <b className={styles.focusMushroom}>Focus Mushroom</b>
        <b className={styles.termsOfService}>Terms of service</b>
        <b className={styles.contactUs}>Contact Us</b>
        <b className={styles.refundPolicy}>Refund Policy</b>
        <div className={styles.groupChild34} />
        <b className={styles.johnDoe2}>@ 2023, John Doe</b>
        <img
          className={styles.imageRemovebgPreview61}
          alt=""
          src="/imageremovebgpreview-6-12@2x.png"
        />
      </div>
      <div className={styles.facebook1Parent}>
        <img
          className={styles.facebook1Icon}
          alt=""
          src="/facebook-11@2x.png"
        />
        <img
          className={styles.instagram11}
          alt=""
          src="/instagram-1-11@2x.png"
        />
        <img className={styles.twitter11} alt="" src="/twitter-1-11@2x.png" />
      </div>
      <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
      <div className={styles.user1Parent}>
        <img className={styles.user1Icon} alt="" src="/user-11@2x.png" />
        <img className={styles.search1Icon} alt="" src="/search-11@2x.png" />
        <img className={styles.cart2Icon} alt="" src="/cart-2@2x.png" />
      </div>
      <div className={styles.div13}>+</div>
      <div className={styles.groupParent5}>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild35} />
          <div className={styles.becomeAnRejuvenicsBrandParent}>
            <div className={styles.becomeAnRejuvenicsContainer}>
              <p
                className={styles.becomeAnRejuvenics}
              >{`Become AN Rejuvenics `}</p>
              <p className={styles.becomeAnRejuvenics}>Brand</p>
            </div>
            <div className={styles.loremIpsumIs36}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.groupChild36} />
              <div className={styles.learnMore10}>Learn More</div>
            </div>
          </div>
          <div className={styles.groupChild37} />
          <div className={styles.groupChild38} />
          <div className={styles.groupChild39} />
          <div className={styles.ellipseParent}>
            <div className={styles.groupChild40} />
            <div className={styles.readMore}>Read More</div>
          </div>
          <img
            className={styles.groupChild41}
            alt=""
            src="/rectangle-192@2x.png"
          />
          <div className={styles.mustTasteThese}>Must taste these Gummies</div>
          <div className={styles.loremIpsumIs37}>
            Lorem Ipsum is simply dummy text of th the industry's standard dummy
            text ever since the 1500s
          </div>
          <div className={styles.longevityMushroomComplex}>
            Longevity Mushroom Complex
          </div>
          <div className={styles.stressReliefGummies}>
            Stress Relief Gummies
          </div>
          <div className={styles.div14}>$00.00</div>
          <div className={styles.div15}>$00.00</div>
          <div className={styles.vectorParent4}>
            <img className={styles.groupChild42} alt="" src="/vector-34.svg" />
            <img
              className={styles.bottle31Icon}
              alt=""
              src="/bottle3-1@2x.png"
            />
          </div>
          <div className={styles.groupChild43} />
          <div className={styles.div16}>+</div>
          <div className={styles.vectorParent5}>
            <img className={styles.groupChild44} alt="" src="/vector-6.svg" />
            <img
              className={styles.bottle12Icon}
              alt=""
              src="/bottle1-2@2x.png"
            />
          </div>
          <div className={styles.groupChild45} />
          <div className={styles.groupChild46} />
        </div>
        <div className={styles.ellipseGroup}>
          <div className={styles.groupChild47} />
          <div className={styles.next}>NEXT</div>
        </div>
      </div>
      <div className={styles.groupParent6}>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild35} />
          <div className={styles.becomeAnRejuvenicsBrandParent}>
            <div className={styles.becomeAnRejuvenicsContainer}>
              <p
                className={styles.becomeAnRejuvenics}
              >{`Become AN Rejuvenics `}</p>
              <p className={styles.becomeAnRejuvenics}>Brand</p>
            </div>
            <div className={styles.loremIpsumIs36}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.groupChild36} />
              <div className={styles.learnMore10}>Learn More</div>
            </div>
          </div>
          <div className={styles.groupChild37} />
          <div className={styles.groupChild38} />
          <div className={styles.groupChild39} />
          <div className={styles.ellipseParent}>
            <div className={styles.groupChild40} />
            <div className={styles.readMore}>Read More</div>
          </div>
          <img
            className={styles.groupChild41}
            alt=""
            src="/rectangle-192@2x.png"
          />
          <div className={styles.mustTasteThese}>Must taste these Gummies</div>
          <div className={styles.loremIpsumIs37}>
            Lorem Ipsum is simply dummy text of th the industry's standard dummy
            text ever since the 1500s
          </div>
          <div className={styles.longevityMushroomComplex}>
            Longevity Mushroom Complex
          </div>
          <div className={styles.stressReliefGummies}>
            Stress Relief Gummies
          </div>
          <div className={styles.div14}>$00.00</div>
          <div className={styles.div15}>$00.00</div>
          <div className={styles.vectorParent4}>
            <img className={styles.groupChild42} alt="" src="/vector-34.svg" />
            <img
              className={styles.bottle31Icon}
              alt=""
              src="/bottle3-1@2x.png"
            />
          </div>
          <div className={styles.groupChild43} />
          <div className={styles.div16}>+</div>
          <div className={styles.vectorParent5}>
            <img className={styles.groupChild44} alt="" src="/vector-6.svg" />
            <img
              className={styles.bottle12Icon}
              alt=""
              src="/bottle1-2@2x.png"
            />
          </div>
          <div className={styles.groupChild45} />
          <div className={styles.groupChild46} />
        </div>
        <div className={styles.ellipseGroup}>
          <div className={styles.groupChild47} />
          <div className={styles.next}>NEXT</div>
        </div>
      </div>
      <img
        className={styles.maskGroupIcon7}
        alt=""
        src="/mask-group11@2x.png"
      />
      <div className={styles.component1}>
        <div className={styles.component1Child} />
        <img className={styles.logo1Icon1} alt="" src="/logo-1@2x.png" />
        <div className={styles.shopNow}>{`SHOP NOW `}</div>
        <div className={styles.learn}>LEARN</div>
        <div className={styles.faq}>FAQ</div>
        <div className={styles.contact}>CONTACT</div>
        <div className={styles.home}>HOME</div>
        <div className={styles.user1Group}>
          <img className={styles.user1Icon} alt="" src="/user-11@2x.png" />
          <img className={styles.search1Icon} alt="" src="/search-11@2x.png" />
          <img className={styles.cart2Icon} alt="" src="/cart-2@2x.png" />
        </div>
        <div className={styles.div20}>+</div>
        <div className={styles.groupParent7}>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild61} />
            <div className={styles.becomeAnRejuvenicsBrandParent}>
              <div className={styles.becomeAnRejuvenicsContainer}>
                <p
                  className={styles.becomeAnRejuvenics}
                >{`Become AN Rejuvenics `}</p>
                <p className={styles.becomeAnRejuvenics}>Brand</p>
              </div>
              <div className={styles.loremIpsumIs36}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </div>
              <div className={styles.rectangleParent2}>
                <div className={styles.groupChild36} />
                <div className={styles.learnMore10}>Learn More</div>
              </div>
            </div>
            <div className={styles.groupChild63} />
            <div className={styles.groupChild64} />
            <div className={styles.groupChild65} />
            <div className={styles.ellipseParent}>
              <div className={styles.groupChild66} />
              <div className={styles.readMore}>Read More</div>
            </div>
            <img
              className={styles.groupChild41}
              alt=""
              src="/rectangle-192@2x.png"
            />
            <div className={styles.mustTasteThese}>
              Must taste these Gummies
            </div>
            <div className={styles.loremIpsumIs37}>
              Lorem Ipsum is simply dummy text of th the industry's standard
              dummy text ever since the 1500s
            </div>
            <div className={styles.div14}>$00.00</div>
            <div className={styles.div22}>$00.00</div>
            <div className={styles.groupChild43} />
            <div className={styles.div16}>+</div>
            <div className={styles.groupChild69} />
            <div className={styles.groupChild70} />
          </div>
          <div className={styles.ellipseGroup}>
            <div className={styles.groupChild71} />
            <div className={styles.next}>NEXT</div>
          </div>
        </div>
        <div className={styles.groupParent8}>
          <div className={styles.focusMaxMushroomParent}>
            <div className={styles.focusMaxMushroom}>Focus Max Mushroom</div>
            <div className={styles.vectorParent8}>
              <img
                className={styles.groupChild72}
                alt=""
                src="/vector-79.svg"
              />
              <img
                className={styles.bottle223}
                alt=""
                src="/bottle2-2-39@2x.png"
              />
            </div>
          </div>
          <div className={styles.focusMaxMushroomGroup}>
            <div className={styles.focusMaxMushroom}>Focus Max Mushroom</div>
            <div className={styles.vectorParent8}>
              <img
                className={styles.groupChild72}
                alt=""
                src="/vector-79.svg"
              />
              <img
                className={styles.bottle223}
                alt=""
                src="/bottle2-2-39@2x.png"
              />
            </div>
          </div>
          <div className={styles.stressReliefGummiesParent}>
            <div className={styles.stressReliefGummies2}>
              Stress Relief Gummies
            </div>
            <div className={styles.vectorParent10}>
              <img className={styles.groupChild74} alt="" src="/vector-6.svg" />
              <img
                className={styles.bottle12Icon}
                alt=""
                src="/bottle1-2@2x.png"
              />
            </div>
          </div>
          <div className={styles.longevityMushroomComplexParent}>
            <div className={styles.longevityMushroomComplex2}>
              Longevity Mushroom Complex
            </div>
            <img
              className={styles.bottle32Icon}
              alt=""
              src="/bottle3-2@2x.png"
            />
          </div>
          <div className={styles.longevityMushroomComplexGroup}>
            <div className={styles.longevityMushroomComplex2}>
              Longevity Mushroom Complex
            </div>
            <img
              className={styles.bottle32Icon}
              alt=""
              src="/bottle3-2@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.faqParent}>
        <div className={styles.faq1} onClick={onFAQText1Click}>
          FAQ
        </div>
        <div className={styles.contact1} onClick={onCONTACTText1Click}>
          CONTACT
        </div>
        <div className={styles.becomeAnRejuvenicsContainer}>HOME</div>
        <div className={styles.aboutUsParent} onClick={onGroupContainer65Click}>
          <div className={styles.becomeAnRejuvenicsContainer}>ABOUT US</div>
          <img
            className={styles.downArrow1Icon}
            alt=""
            src="/downarrow-1@2x.png"
          />
        </div>
        <div className={styles.shopNowParent}>
          <div
            className={styles.becomeAnRejuvenicsContainer}
          >{`SHOP NOW `}</div>
          <img
            className={styles.downArrow3Icon}
            alt=""
            src="/downarrow-1@2x.png"
          />
        </div>
        <div className={styles.learnParent}>
          <div className={styles.becomeAnRejuvenicsContainer}>LEARN</div>
          <img
            className={styles.downArrow2Icon}
            alt=""
            src="/downarrow-1@2x.png"
          />
        </div>
      </div>
      <img
        className={styles.frontViewWomanRidingHerBiIcon}
        alt=""
        src="/frontviewwomanridingherbike-1@2x.png"
      />
      <img
        className={styles.homePageDesignChild47}
        alt=""
        src="/group-134.svg"
      />
    </div>
  );
};

export default HomePageDesign;
