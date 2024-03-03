// MyFirstComponent.js
import React, { useState } from 'react';
import { Button, Menu, Card} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined, CaretDownOutlined, InstagramOutlined, FacebookOutlined} from '@ant-design/icons';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import './MyFirstComponent.scss';

const principalMenu = ["Somos", "Medicamentos Bioequivalentes", "Farmacologia", "Blog la Santé", "Contacto"];
const blogLaSante = ["Ver todas las entradas", "Todo acerca del Glaucoma", "Salud Visual", "Alergias", "Hipertensión Arterial", "Vitamina C", "Infecciones virales", "Bacterias", "Antihistamínicos"];

function getItem(label, key, icon = null, children = null, type = null) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Somos', '1'),
  getItem('Medicamentos Bioequivalentes', '2'),
  getItem('Farmacovigilancia', '3'),
  getItem('Blog La Santé', 'sub1', <CaretDownOutlined />, [
    getItem('Ver todas las entradas', '5'),
    getItem('Todo acerca del Glaucoma', '6'),
    getItem('Salud Visual', '7'),
    getItem('Alergias', '8'),
    getItem('Hipertensión Arterial', '9'),
    getItem('Vitamina C', '10'),
    getItem('Infecciones virales', '11'),
    getItem('Bacterias', '12'),
    getItem('Antihistamínicos', '13')
  ]),
  getItem('Contacto', '14'),
];

export const MyFirstComponent = () => {
  const { Search } = Input;
  const { Meta } = Card;

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <>
      <div className="busqueda-inicial">
        <text>servicioalcliente@lasante.com.co</text>
        <Button shape="circle" icon={<FacebookOutlined />}></Button>
        <Button shape="circle" icon={<InstagramOutlined />}></Button>
        <Search className="input" placeholder="Buscar" onSearch={onSearch} enterButton/>
      </div>

      <div className="menu-principal">
        <img
          src={"https://www.lasante.com.co/userfiles/2021/09/laSante@2x.png"}
          alt={"logo"}
          className="logo"
        />
        <Menu
          theme="light"
          mode="horizontal"
          inlineCollapsed={collapsed}
          items={items}
          className="menu"
        />
      </div>

      <div className="div-img-principal">
        <text className="img-text">Salud y vida para más personas</text>
        <img
          src={"https://www.lasante.com.co/userfiles/2022/02/BannerWeb_DesktopSlogan.jpg"}
          alt={"logo"}
          className="img-principal"
        />
      </div>

      <text className="cards-1-text">Contamos con un 
        <span> portafolio especializado </span>
        para cualquier tipo de necesidad
        <span> ¡Conócelo!</span>
      </text>

        <div className="div-cards-1">
          <Card
            className="card-style"
            hoverable
            cover = {<img alt={"oft"} src={"https://www.lasante.com.co/userfiles/2021/09/oftalmico@3x.png"} />}
          >
            <Meta title="OFTÁLMICOS" description="Soluciones oftálmicas para la salud visual..." />
          </Card>
          <Card
            className="card-style"
            hoverable
            cover = {<img alt={"oft"} src={"https://www.lasante.com.co/userfiles/2021/09/interna@3x.png"} />}
          >
            <Meta title="MEDICINA INTERNA" description="Enfocados en el manejo de los más frecuentes trastornos..." />
          </Card>
          <Card
            className="card-style"
            hoverable
            cover = {<img alt={"oft"} src={"https://www.lasante.com.co/userfiles/2021/09/nervioso@3x.png"} />}
          >
            
            <Meta title="SISTEMA NERVIOSO" description="Tratamientos dirigidos a los trastornos de sueño, depresión..." />
          </Card>
          <Card
            className="card-style"
            hoverable
            cover = {<img alt={"oft"} src={"https://www.lasante.com.co/userfiles/2021/09/vida@3x.png"} />}
          >
            <Meta title="CALIDAD DE VIDA" description="Medicamente contra el dolor y la inflamación, así como..." />
          </Card>
          <Card
            className="card-style"
            hoverable
            cover = {<img alt={"oft"} src={"https://www.lasante.com.co/userfiles/2021/09/antiinfecciosos@3x.png"} />}
          >
            <Meta title="INFECCIOSOS" description="Enfocados en el tratamiento de infecciones por..." />
          </Card>
        </div>

        <div className = "div-img-2">
          <img
            src={"https://cdn.colombia.com/sdi/2022/10/18/cientificos-crean-nueva-cepa-coronavirus-laboratorio-es-muy-letal-1075925.webp"}
            alt={"logo"}
            className="img-2"
          />
          <div className = "subdiv-img-2">
            <h3 className = "text-img-2">Más de 30 años trabajando para tu salud</h3>
            <text className = "text-2-img-2">Más de 3 décadas de investigación, desarrollo y comercialización de medicamentos genéricos y de marca.</text>
            <Button className = "button-img-2" type="primary">EXPERIENCIA LA SANTÉ</Button>
          </div>
        </div>
          
        <div className = "div-products">
          <h3 className = "h3-products">Conoce algunos de nuestros productos</h3>
          <div className = "div-cards">
          <Card
            className = "card-product"
            cover = {<img alt={"oft"} src={"https://www.lasante.com.co/userfiles/2022/01/1401-Bromhexina-La-Sante.png"} />}
          ></Card>
          <Card
            className = "card-product"
            cover = {<img alt={"oft"} src={"https://www.lasante.com.co/userfiles/2022/01/1401-Acetaminofen-La-Sante.png"} />}
          ></Card>
          </div>
          <div className = "div-info">
            <div className = "div-info-card">
              <h4 className = "title-info">Infecciones virales</h4>
              <Card
                className = "card-info"
                cover = {<img alt={"oft"} src={"https://www.lasante.com.co/userfiles/2022/02/WebLS_FotoBlog_InfVirales.jpg"} />}
              ></Card>
              <div className = "subdiv-info">
                <text className = "text-info">Infecciones virales Causadas por virus, que son gérmenes muy pequeños, compuestos de material genético (ADN, ARN) con un recubrimiento de proteínas. Los virus pueden causar enfermedad</text>
                
              </div>
              <div>
                <Button className = "button-info-1" type="primary">Leer más</Button>
              </div>
            </div>
            <div>
              <h4 className = "title-info">Bacterias</h4>
              <Card
                className = "card-info"
                cover = {<img alt={"oft"} src={"https://www.lasante.com.co/userfiles/2022/02/WebLS_FotoBlog_Bacterias.jpg"} />}
              ></Card>
            </div>
            <div className = "card-info">
              <h4 className = "title-info">Prevencion covid 19</h4>
              <Card
                className = "card-info"
                cover = {<img alt={"oft"} src={"https://www.lasante.com.co/userfiles/2022/02/WebLS_FotoBlog_PrevencionCov19.jpg"} />}
              ></Card>
            </div>
          </div>
        </div>
        <div className = "div-publications">
          <h3 className = "h3-products">Conoce algunos de nuestros productos</h3>
          <div className = "div-cards-publi">
          <Card
            className = "card-publication"
            hoverable
            cover = {<img alt={"oft"} src={"https://scontent.cdninstagram.com/v/t39.30808-6/429568131_713350994284748_7717528814129539924_n.jpg?stp=cp6_dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=Xi1Z5BpQyQsAX_BMzgT&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMxMzAwNjQ5MzA5NzU2MDkyNQ%3D%3D.2-ccb7-5&oh=00_AfD-07bDHjZYqVWL4CnT_ovvUXcYK05VXYW1UCe6H7fN7A&oe=65E87C1C&_nc_sid=10d13b"} />}
          ></Card>
          <Card
            className = "card-publication"
            hoverable
            cover = {<img alt={"oft"} src={"https://scontent.cdninstagram.com/v/t39.30808-6/428639785_709744621312052_903823983237719084_n.jpg?stp=cp6_dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=0HsrFr8qd38AX8jKQdH&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMwNzkxMDMwMTkwOTE5Njg0Mw%3D%3D.2-ccb7-5&oh=00_AfBj1ubHtfSOHNqIBeZXjnKPtd3vz8zaqVeqPsH0IDBGnw&oe=65E93320&_nc_sid=10d13b"} />}
          ></Card>
          <Card
            className = "card-publication"
            hoverable
            cover = {<img alt={"oft"} src={"https://scontent.cdninstagram.com/v/t39.30808-6/428604620_709271631359351_5912232672135830737_n.jpg?stp=cp6_dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=REUdldza6ZEAX8meE9X&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMwNzIyNzM2NzMxNDAzMzc5Mg%3D%3D.2-ccb7-5&oh=00_AfB_NRj-SfH3LRWfm4fgO-UIiENIMLm99f4byT2N1VVSxA&oe=65E7920D&_nc_sid=10d13b"} />}
          ></Card>
          <Card
            className = "card-publication"
            hoverable
            cover = {<img alt={"oft"} src={"https://scontent.cdninstagram.com/v/t39.30808-6/426380437_705928798360301_7897332144964204623_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=vUElnxkBcacAX8a96T7&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMwMjgwNTc5MDgyMzgwMjE2Ng%3D%3D.2-ccb7-5&oh=00_AfCSQLVBPoTz8TzqMJyLV2xMtUs__FP4uyGXI5OdgqopKQ&oe=65E78180&_nc_sid=10d13b"} />}
          ></Card>
          </div>
          <div className = "div-cards-publi-1">
          <Card
            className = "card-publication"
            hoverable
            cover = {<img alt={"oft"} src={"https://scontent.cdninstagram.com/v/t39.30808-6/428062858_705276241758890_7061742919192206252_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=BNS22F4e2aAAX8VCUxH&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMwMTk5NTIzNTY4MDEzMDg2MA%3D%3D.2-ccb7-5&oh=00_AfAP2RZzQwJ_fQB2JdN_ZAxMNkHybU2wYMOokSZiWdbTWA&oe=65E84855&_nc_sid=10d13b"} />}
          ></Card>
          <Card
            className = "card-publication"
            hoverable
            cover = {<img alt={"oft"} src={"https://scontent.cdninstagram.com/v/t39.30808-6/427765932_704703888482792_3344076518561156260_n.jpg?stp=cp6_dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=rZ-E5kykPvQAX8Tc59X&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMwMTI2ODQ3MDMxMDI3NTcwNw%3D%3D.2-ccb7-5&oh=00_AfACFS-7avrxxIhqq4vLlYUK40LIRu-jzW8X9hj2A52ZGw&oe=65E75467&_nc_sid=10d13b"} />}
          ></Card>
          <Card
            className = "card-publication"
            hoverable
            cover = {<img alt={"oft"} src={"https://scontent.cdninstagram.com/v/t39.30808-6/425799735_701170642169450_6523076475141709304_n.jpg?stp=cp6_dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=DBYA62o4auUAX9pzroX&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI5Njk2MDAxNjU4MzgwMzQ5Ng%3D%3D.2-ccb7-5&oh=00_AfAH1k2KnGp8Vvy48_mE_y8d-r6woWYEBVkGiu4EArH3uA&oe=65E92C75&_nc_sid=10d13b"} />}
          ></Card>
          <Card
            className = "card-publication"
            hoverable
            cover = {<img alt={"oft"} src={"https://scontent.cdninstagram.com/v/t39.30808-6/424625657_697126202573894_1070464027790532210_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=guZQCZt8kGoAX8BM4Dd&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI5MTgxNTY4ODM0ODA1OTQ2MA%3D%3D.2-ccb7-5&oh=00_AfCRkHYnOD9nhJaerQovgfGAsLIdZdAn8SSIY7BZ0TaGrw&oe=65E8E3EF&_nc_sid=10d13b"} />}
          ></Card>
          </div>
        </div>
        <div className = "div-allies">
          <h3 className = "h3-products">Nuestros aliados</h3>
          <div className = "div-logo">
            <img 
              src={"https://www.lasante.com.co/userfiles/2022/04/logo-cafam.png"}
              alt={"logo"}
              className="img-allies"
            ></img>
            <img
              src={"https://www.lasante.com.co/userfiles/2022/04/logo-colsusidio@2x.png"}
              alt={"logo"}
              className="img-allies"
            ></img>
            <img
              src={"https://www.lasante.com.co/userfiles/2022/05/logo-rebaja.png"}
              alt={"logo"}
              className="img-allies"
            ></img>
            <img
              src={"https://www.lasante.com.co/userfiles/2022/04/logo-lopido@2x.png"}
              alt={"logo"}
              className="img-allies"
            ></img>
            <img
              src={"https://www.lasante.com.co/userfiles/2022/05/LOGO-COMFANDI.png"}
              alt={"logo"}
              className="img-allies"
            ></img>
            <img
              src={"https://www.lasante.com.co/userfiles/2022/10/droxi.png"}
              alt={"logo"}
              className="img-allies"
            ></img>
          </div>
        </div>
        <div className = "footer">
          <img
            src = {"https://www.lasante.com.co/userfiles/2020/05/logo-la-sante-naranja-300x96.png"}
            alt = {"logo"}
            className = "footer-img"
          ></img>
          <div>
            <h2 className = "footer-title">Suscribete</h2>
            <Input className="email" placeholder="Email" onSearch={onSearch} enterButton/>
            <Button type="primary" className = "btn-sub">Suscribirse</Button>
            <div className = "div-contact">
              <p className = "footer-text-1">Síguenos en nuestras redes sociales</p>
              <Button className = "btn-networks" shape="circle" icon={<FacebookOutlined />}></Button>
              <Button className = "btn-networks" shape="circle" icon={<InstagramOutlined />}></Button>
            </div>
          </div>
          <div>
            <h2 className = "footer-title">Contacto</h2>
            <p className = "footer-text">601 3647500 Cra 65 B No. 13-13 Zona industrial Montevideo, Bogotá</p>
            <p className = "footer-text">Email: servicioalcliente@lasante.com.co</p>
            <p className = "footer-text">Política de protección de datos personales</p>
            <p className = "footer-text">Código de ética y cumplimiento</p>
          </div>
        </div>
    </>
  );
};
