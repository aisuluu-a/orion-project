import "./about.scss";

function About() {
  return (
    <div className="about" id="about">
      <h1> About Us</h1>
      <div className="about-img">
        <div className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          illum?
        </div>
        <img
          src="https://images.unsplash.com/photo-1518481852452-9415b262eba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </div>
      <div className="row">
        <div className="col">
          <h2>About us</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          delectus tenetur necessitatibus placeat exercitationem dolore
          blanditiis cumque id quae maiores. Suscipit at in molestias minus
          culpa assumenda ea unde libero.
        </div>
        <div className="col">
          <h2>Наши контакты </h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          incidunt, eveniet provident pariatur nam, beatae tenetur similique eos
          quis quidem libero eum minima vero quod. Perspiciatis tempora
          distinctio sit pariatur?
        </div>
        <div className="col">
          <h2>Почему Мы </h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo
          quis blanditiis sapiente dolor non libero atque aliquam, sunt harum
          neque ab ratione eveniet doloremque provident ea consequatur suscipit
          voluptatem!
        </div>
      </div>
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-6">
            <h1> О компании</h1>
            <p>
              SoftVoya началась с маленького IT отдела внутри Raiffeisen Group в
              2016 и выросла до самостоятельной компании из 100 сотрудников в
              2020. Мы – инженеры, дизайнеры и менеджеры, которые увлечены своим
              делом и полностью погружаются в проект клиента для достижения
              лучшего результата. Компания быстро растет и нам нужны новые люди.
            </p>
            <strong>
              Актуальный список открытых вакансий
              <a href="https://softvoya.by/vacancies"> здесь </a>
            </strong>
            <img
              className="img-fluid"
              src="https://softvoya.ru/assets/img/about-us/diagramm.svg"
              alt="img"
            />
          </div>
          <div className="col-6">
            <img
              className="img-fluid"
              src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/16348/images/SE4MzukFTlyFWtj5wuhz_file.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-light py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <img
                className="img-fluid"
                src="https://softvoya.ru/assets/img/about-us/illustration-info.png"
                alt="foto"
              />
            </div>
            <div className="col-6">
              <p>
                Наша команда реализовала более 100 проектов для клиентов из
                России, Казахстана, США и Западной Европы в сферах финансы,
                юридические услуги, страхование, медицина, недвижимость, туризм.
                Мы помогаем масштабировать бизнес: автоматизируем и оцифруем
                процессы, разработаем индивидуальный софт, интегрируем массовые
                решения и поможем управлять подрядчиками в нашей CRM-системе,
                Upservice.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <p>
                Наши собственные курсы проектного менеджмента, методологии agile
                и DevOps позволяют команде оценивать работу в ретроспективе,
                улучшать процессы и координировать будущие стратегии.
              </p>
            </div>
            <div className="col-6">
              <img
                className="img-fluid"
                src="https://softvoya.ru/assets/img/about-us/about-us-docs.svg"
                alt="foto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <a href="#" className="about-btn">
          Начать проект
        </a>
      </div>
    </div>
  );
}

export default About;
