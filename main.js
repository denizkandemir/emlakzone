const integrations = [
    {
        title: "Kontrat Takibi",
        text: "Emlak sektöründe kontrat takibi, kiralama ve satış süreçlerinin sorunsuz ilerlemesi için kritik öneme sahiptir. Doğru bir takip, anlaşmazlıkların önüne geçer, zamanında ödemeleri garanti altına alır ve süreçleri şeffaf hale getirir. Dijital yönetim, belge kaybını engeller.",
        img: "imgs/contract.jpg"
    },

   
    {
        title: "Müşteri Takibi",
        text: "Müşteri takibi, satış sonrası müşteri memnuniyetini artırmak, sadakati güçlendirmek ve uzun vadeli ilişkiler kurmak için kritik bir süreçtir. Düzenli iletişim ve veri analizi, müşterilere uygun çözümler sunmaya ve müşteri memnuniyetini arttırmaya yardımcı olur.",
        img: "imgs/client.jpg"
    },

    {
        title: "Toplu Sms&Mail Gönderimi",
        text: "Toplu SMS ve mail gönderimi, geniş kitlelere aynı anda hızlıca ulaşmanın en etkili yollarından biridir. Kampanyalar, duyurular veya hatırlatmalar için ideal bir çözüm sunar. Toplu mail ve sms göndererek, bilgilendirme ve pazarlama stratejilerinizi kolayca hayata geçirebilirsiniz.",
        img: "imgs/sendingMail.jpg"
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


function handleSidebar() {
    const sidebarOpener = document.querySelector("#sidebar-opener");
    const overlay = document.querySelector("#overlay-div");
    const sidebar = document.querySelector("#sidebar-container");
    const sidebarCloser = document.querySelector("#sidebar-closer");

    sidebarOpener.addEventListener(("click") , () => {
       sidebar.classList.add("display-sidebar");
       overlay.classList.add("blur");
       document.body.classList.add("no-scroll");
    });

    sidebarCloser.addEventListener(("click") , () => {
        sidebar.classList.remove("display-sidebar");
        overlay.classList.remove("blur");
        document.body.classList.remove("no-scroll");
    });
}

function handleIntegrations() {
    const integrationsContainer = document.querySelector("#integrations-cards-container");

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
}

const questions = [

    {
        title: "Tapu devri nasıl yapılır?",
        text: "Tapu devri, alıcı ve satıcının Tapu Müdürlüğü'ne giderek satış işlemini gerçekleştirmesi ile yapılır. Tapu işlemi sırasında, tarafların kimlik belgeleri, satış sözleşmesi ve gerekli harç ödemelerinin yapılmış olması gerekmektedir."
    },



    {
        title: "Ev satın alma süreci nasıl işler?",
        text: "Ev satın alma süreci genellikle şu adımlardan oluşur: ev arama, finansal durumundeğerlendirilmesi, mortgage başvurusu, evin incelenmesi, teklif sunma, tapu devri ve son olarak evin teslim alınması."
    },

    {
        title: "Evi kiraladıktan sonra kiracı haklarım nelerdir?",
        text: "Kiracı olarak, kira sözleşmesinde belirtilen şartlara uygun olarak evde oturma hakkına sahipsiniz. Ayrıca, ev sahibi tarafından izinsiz olarak eve girilmesi, kirada haksız artış yapılması gibi durumlar yasalarla korunur. Haklarınız, kira sözleşmesi ve ilgili kanunlarla güvence altındadır."
    },


    {
        title: "Ev satın alırken ekspertiz raporu zorunlu mudur?",
        text: "Konut kredisi ile ev alıyorsanız, bankalar genellikle ekspertiz raporu talep eder. Bu rapor, evin gerçek piyasa değerini belirlemek için bir uzman tarafından hazırlanır. Ancak, peşin ödeme ile ev alıyorsanız, ekspertiz raporu zorunlu değildir fakat alıcı açısından faydalı olabilir."
    },


    {
        title: "Bir evi kiralamak için gereken belgeler nelerdir?",
        text: "Kiralık bir ev için genellikle kimlik belgesi, maaş bordrosu, kira sözleşmesi ve bazı durumlarda kefil talep edilebilir. Kiraya veren ile kiracının karşılıklı olarak tüm şartları kabul ettiği bir kira sözleşmesi yapılır."
    },

    {
        title: "Konut satış işlemi sırasında emlakçı komisyonu ne kadar olur?",
        text: "Türkiye'de emlakçı komisyonu, gayrimenkul satış bedelinin %2'si olarak belirlenmiştir ve genellikle hem alıcıdan hem de satıcıdan ayrı ayrı alınır. Ancak, taraflar arasında farklı bir anlaşma yapılabilir. Kiralama işlemlerinde ise emlakçı komisyonu genellikle bir aylık kira bedeli olarak alınır."
    },
];




function handleQuestionDropdowns() {
    const questionsContainer = document.querySelector("#questions-container");

    questionsContainer.innerHTML += questions.map((question) => {
        return `
    <div class="sss-question-answer-container">
          <div class="question-svg-container">
            <p class="sss-p"> ${question.title} </p>
            <i class="fa-solid sss-icon fa-angle-down" id="sss-icon"></i>          
          </div>
          <p class="answer-p">
            ${question.text}
          </p>
    </div>
  `
    }).join("");

    const questionDropdowns = questionsContainer.querySelectorAll("#sss-icon");

    questionDropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", () => {
            const answer = dropdown.closest(".sss-question-answer-container").querySelector(".answer-p");
            answer.classList.toggle("active");
            dropdown.classList.toggle("icon-up");
        });
    })
}

handleSidebar();
handleIntegrations();
handleQuestionDropdowns();