const integrationsContainer = document.querySelector("#integrations-cards-container");

const integrations = [
    {
        title: "Kontrat Takibi",
        text: "Emlak sektöründe kontrat takibi, kiralama ve satış süreçlerinin sorunsuz ilerlemesi için kritik öneme sahiptir. Doğru bir takip, anlaşmazlıkların önüne geçer, zamanında ödemeleri garanti altına alır ve süreçleri şeffaf hale getirir. Dijital yönetim, belge kaybını engeller.",
        img: "imgs/contract.jpg"
    },

    {
        title: "Toplu Sms&Mail Gönderimi",
        text: "Toplu SMS ve mail gönderimi, geniş kitlelere aynı anda hızlıca ulaşmanın en etkili yollarından biridir. Kampanyalar, duyurular veya hatırlatmalar için ideal bir çözüm sunar. Toplu mail ve sms göndererek, bilgilendirme ve pazarlama stratejilerinizi kolayca hayata geçirebilirsiniz.",
        img: "imgs/sendingMail.jpg"
    },

   

    {
        title: "Müşteri Takibi",
        text: "Müşteri takibi, satış sonrası müşteri memnuniyetini artırmak, sadakati güçlendirmek ve uzun vadeli ilişkiler kurmak için kritik bir süreçtir. Düzenli iletişim ve veri analizi, müşterilere uygun çözümler sunmaya ve müşteri memnuniyetini arttırmaya yardımcı olur.",
        img: "imgs/client.jpg"
    },

    {
        title: "NETGSM Entragrasyonu",
        text: "NETGSM entegrasyonu, işletmelerin SMS, sesli mesaj ve diğer iletişim hizmetlerini kendi sistemlerine entegre ederek hızlı ve etkili bir iletişim ağı kurmalarını sağlar. Otomatik mesaj gönderimi, toplu SMS kampanyaları ve müşteri bildirimleri gibi işlemler NETGSM ile kolayca yönetilir.",
        img: "imgs/netGsm.jpg"
    },

    {
        title: "Takvim",
        text: "Emlak takvimi, kiralama ve satış süreçlerinde önemli tarihleri takip etmeyi kolaylaştırır. Kira ödemeleri, kontrat yenilemeleri, bakım hizmetleri gibi kritik olayları hatırlatarak, hem mülk sahiplerinin hem de kiracıların zamanında aksiyon almasını sağlar.",
        img: "imgs/calender.jpg"
    },

    {
        title: "SMTP Mail ve  Gmail Entegrasyonu",
        text: "SMTP (Simple Mail Transfer Protocol) ve Gmail entegrasyonu, uygulamalar üzerinden güvenli e-posta gönderimini sağlar. Gmail'in SMTP sunucusu kullanılarak yapılan gönderimler, spam filtrelerinden geçer ve güvenli bir şekilde alıcılara ulaşır.",
        img: "imgs/mailIntegration.jpg"
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
      <div class="integrations-button-container">
       <div class="integrations-logo-container">
            <img class="integrations-logo" src="imgs/logo.png" alt="">
       </div>
        <a
           class="integrations-link">
           <button class="integrations-button"> İncele </button>
       </a>
       </div>
   </div>  
`;
}).join("");
