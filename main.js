const integrationsContainer = document.querySelector("#integrations-cards-container");

const integrations = [
    {
        title: "Kontrat Takibi",
        text: "",
        img: "imgs/contract.jpg"
    },

    {
        title: "SMTP Mail ve  Gmail Entegrasyonu ",
        text: "",
        img: "imgs/mailIntegration.jpg"
    },

    {
        title: "Müşteri Takibi",
        text: "",
        img: "imgs/client.jpg"
    },

    {
        title: "NETGSM Entragrasyonu ",
        text: "",
        img: "imgs/netGsm.jpg"
    },

    {
        title: "Takvim",
        text: "",
        img: "imgs/calender.jpg"
    },

    {
        title: "Toplu Sms&Mail Gönderimi ",
        text: "",
        img: "imgs/sendingMail.jpg"
    },
]

integrationsContainer.innerHTML = integrations.map((integration) => {
    return `
   <div class="integrations-wrapper">
      <div class="integrations-img-container">
        <img src="${integration.img}" class="integration-img" alt="">
      </div>
      <div class="integrations-text-container">
        <p class="integrations-title"> ${integration.title} </p>
        <p class="integrations-p"> ${integration.text} </p>
      </div>
      <div class="services-button-container">
       <img class="services-logo" src="imgs/logo.png" alt="">
        <a
           class="services-link" href="#/translatePage">
           <button class="services-button"> İncele </button>
       </a>
       </div>
   </div>  
`;
}).join("");
