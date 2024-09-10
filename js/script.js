function ServicesFill(){
    const ServicesData = [
        { image: './images/services/letters.svg', title: 'تصنيع الحروف البارزة ' },
        { image: './images/services/stand.png', title: 'صناعة ألاستندات الخشبية ' },
        { image: './images/services/board.svg', title: 'صناعة اللوحات الأعلانية بكافة انواعها ' },
        { image: './images/services/idea.svg', title: 'تقديم حلول متكاملة لاستخدام أفضل المنتجات ' },
        { image: './images/services/maintance.svg', title: 'صيانة ' },
         { image: './images/projects/21.png', title: 'مشروع 21' },
        { image: './images/projects/22.png', title: 'مشروع 22' },
        { image: './images/projects/23.png', title: 'مشروع 23' },
        { image: './images/projects/24.png', title: 'مشروع 24' },
        { image: './images/projects/25.png', title: 'مشروع 25' },
        { image: './images/projects/26.png', title: 'مشروع 26' },
        { image: './images/projects/27.png', title: 'مشروع 27' },
        { image: './images/projects/28.png', title: 'مشروع 28' },
        { image: './images/projects/29.png', title: 'مشروع 29' },
        { image: './images/projects/30.png', title: 'مشروع 30' },
        { image: './images/projects/31.png', title: 'مشروع 31' },
        { image: './images/projects/32.png', title: 'مشروع 32' },
        { image: './images/projects/33.png', title: 'مشروع 33' },
        { image: './images/projects/34.png', title: 'مشروع 34' },
        { image: './images/projects/35.png', title: 'مشروع 35' },
        { image: './images/projects/36.png', title: 'مشروع 36' },
        { image: './images/projects/37.png', title: 'مشروع 37' },
        { image: './images/projects/38.png', title: 'مشروع 38' },
        { image: './images/projects/39.png', title: 'مشروع 39' },
        { image: './images/projects/40.png', title: 'مشروع 40' },
    ];
    const servicesContainer = document.querySelector('.service_container');

    ServicesData.forEach(service => {
        const serviceCard = `
           <div class="box">
          <div class="img-box">
            <img src="${service.image}" class="img1" alt="${service.title} loading="lazy">
          </div>
          <div class="detail-box">
            <h5>
                 ${service.title}
            </h5>
          </div>
        </div>
        `;
        servicesContainer.innerHTML += serviceCard;
    });
}
ServicesFill()

function ProjectsFill() {
    const projectsData = [
        { image: './images/projects/1.png', title: 'مشروع 1' },
        { image: './images/projects/2.png', title: 'مشروع 2' },
        { image: './images/projects/3.png', title: 'مشروع 3' },
        { image: './images/projects/4.png', title: 'مشروع 4' },
        { image: './images/projects/5.png', title: 'مشروع 5' },
        { image: './images/projects/6.png', title: 'مشروع 6' },
        { image: './images/projects/7.png', title: 'مشروع 7' },
        { image: './images/projects/8.png', title: 'مشروع 8' },
        { image: './images/projects/9.png', title: 'مشروع 10' },
        { image: './images/projects/11.png', title: 'مشروع 11' },
        { image: './images/projects/12.png', title: 'مشروع 12' },
        { image: './images/projects/13.png', title: 'مشروع 13' },
        { image: './images/projects/14.png', title: 'مشروع 14' },
        { image: './images/projects/15.png', title: 'مشروع 15' },
        { image: './images/projects/16.png', title: 'مشروع 16' },
        { image: './images/projects/17.png', title: 'مشروع 17' },
        { image: './images/projects/18.png', title: 'مشروع 18' },
        { image: './images/projects/19.png', title: 'مشروع 19' },
        { image: './images/projects/20.png', title: 'مشروع 20' },

    ];
    const projectsContainer = document.querySelector('.projects-container');

    projectsData.forEach(project => {
        const projectCard = `
            <div class=" col-lg-3 col-md-4 col-sm-6">
                <div class="card  mb-3">
                    <img src="${project.image}" class="card-img-top" alt="${project.title}" loading="lazy">
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectCard;
    });
}

ProjectsFill();



