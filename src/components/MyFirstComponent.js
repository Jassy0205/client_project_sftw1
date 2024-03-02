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
    </>
  );
};
