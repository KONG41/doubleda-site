import React from 'react'
import { useTranslation } from 'react-i18next';
import InputContact from '../components/InputContact';
import TextImg from '../components/TextImg';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const BlockchainNFT = () => {
    const { t } = useTranslation();
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
  return (
   <>
      <section>
        <div className="banner_inner" style={{ backgroundImage: `url(${require('../assets/image/network-gfae1fde8e_1920.jpg')})` }}>
          <div className="container black-over-lay">
            <div className="row">
              <div className="col-12">
                <div className="banner_content nft-content">
                  <h5 className="text-uppercase sub-title nft-sub-title">welcome to the new world</h5>
                  <h1 className="text-uppercase main-title nft-main-title">Creative</h1>
                  <p className=" text-uppercase desc-title">blockchain & nft</p>
                </div>
              </div>
            </div>
          </div>
          <Particles 
        
        id="particles-here" init={particlesInit} 
        width="100%" height="10%"
        options={{
            background: {
                color: {
                    value: "",
                },
            },
        fullScreen:{
            enable: true,
            zIndex: -2,
        },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: false,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#fff",
                    distance: 100,
                    enable: true,
                    opacity: .6,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
            
        }}
        />
        </div>
      </section>
      <section className="nft-container">
        <TextImg
            imgUrl = {require("../assets/image/3-2048x1152.jpg")}
            topTitle="Private Blockchain Network"
            descTitle={["We help create private decentralized blockchain network that provide increased traceability and security of data and transactions."]}
            useCase={["Financial trading platform (Crypto & Fiat)","Supply chain and Logistics System","Identity and access management","Big Data Management","Asset ownership management (Copyright, Property)"]}
            caseTitle="Use Cases"
            border={true}
        />
        <TextImg 
            className="reverse"
            imgUrl={require("../assets/image/2.jpg")}
            topTitle="SMART CONTRACT"
            descTitle={["We provide the benefits of business automation to your business with smart contracts.","Our smart contract platform enables you to use for following industries."]} 
            useCase={["Intellectual Property Rights","Cryptocurrency Exchange","Fintech & Banking, Securities","Digital Asset Exchange","Real Estate Ownership Transfer","Trading & Remittance"]}
            border={true}
        />
        <TextImg
           imgUrl={require("../assets/image/1-2048x1475.jpg")}
           topTitle="Crypto Wallet"
           descTitle={["It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors."
                      ,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."]}
         />
        <TextImg 
            className="reverse"  imgUrl={require("../assets/image/1-1-2048x1384.jpg")}
            topTitle="Tokenization & NFT"
            descTitle={["Tokenization is the process of exchanging sensitive data for nonsensitive data called “tokens” that can be used in a database or internal system without bringing it into scope.", "We provide services and platform that allow clients to create, manage and trade their tokens (including NFT platforms)."]}
        />
      </section>
      <section className="layout">
         <InputContact />
      </section>
   </>
  )
}

export default BlockchainNFT