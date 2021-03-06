import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { IconHover } from '../../components';
import styles from './Header.module.scss';
import imgLogo from '../../assets/images/header-logo.png';
import initCampingIcon from '../../assets/images/headers/items=camping, hover=no.svg';
import hoverCampingIcon from '../../assets/images/headers/items=camping, hover=yes.svg';
import initCelebrationIcon from '../../assets/images/headers/items=celebration, hover=no.svg';
import hoverCelebrationIcon from '../../assets/images/headers/items=celebration, hover=yes.svg';
import initCentralIcon from '../../assets/images/headers/items=central, hover=no.svg';
import hoverCentralIcon from '../../assets/images/headers/items=central, hover=yes.svg';
import initDrinkIcon from '../../assets/images/headers/items=drink, hover=no.svg';
import hoverDrinkIcon from '../../assets/images/headers/items=drink, hover=yes.svg';
import initEastIcon from '../../assets/images/headers/items=east, hover=no.svg';
import hoverEastIcon from '../../assets/images/headers/items=east, hover=yes.svg';
import initExhitionIcon from '../../assets/images/headers/items=exhition, hover=no.svg';
import hoverExhitionIcon from '../../assets/images/headers/items=exhition, hover=yes.svg';
import initFamilyIcon from '../../assets/images/headers/items=family, hover=no.svg';
import hoverFamilyIcon from '../../assets/images/headers/items=family, hover=yes.svg';
import initFlowerIcon from '../../assets/images/headers/items=flower, hover=no.svg';
import hoverFlowerIcon from '../../assets/images/headers/items=flower, hover=yes.svg';
import initHistoryIcon from '../../assets/images/headers/items=history, hover=no.svg';
import hoverHistoryIcon from '../../assets/images/headers/items=history, hover=yes.svg';
import initHotSpringIcon from '../../assets/images/headers/items=hot-spring, hover=no.svg';
import hoverHotSpringIcon from '../../assets/images/headers/items=hot-spring, hover=yes.svg';
import initIsladnsIcon from '../../assets/images/headers/items=islands, hover=no.svg';
import hoverIsladnsIcon from '../../assets/images/headers/items=islands, hover=yes.svg';
import initMealIcon from '../../assets/images/headers/items=meal, hover=no.svg';
import hoverMealIcon from '../../assets/images/headers/items=meal, hover=yes.svg';
import initNorthIcon from '../../assets/images/headers/items=north, hover=no.svg';
import hoverNorthIcon from '../../assets/images/headers/items=north, hover=yes.svg';
import initOutdoorIcon from '../../assets/images/headers/items=outdoor, hover=no.svg';
import hoverOutdoorIcon from '../../assets/images/headers/items=outdoor, hover=yes.svg';
import initSnackIcon from '../../assets/images/headers/items=snack, hover=no.svg';
import hoverSnackIcon from '../../assets/images/headers/items=snack, hover=yes.svg';
import initSouthIcon from '../../assets/images/headers/items=south, hover=no.svg';
import hoverSouthIcon from '../../assets/images/headers/items=south, hover=yes.svg';
import initSouvenirIcon from '../../assets/images/headers/items=souvenir, hover=no.svg';
import hoverSouvenirIcon from '../../assets/images/headers/items=souvenir, hover=yes.svg';

import iconPerson from '../../assets/icons/personIcon.png';
import iconSearch from '../../assets/icons/searchIcon.png';

const { SubMenu } = Menu;

const headerList = [
  {
    name1: "?????????",
    name2: "ATTRACTION",
    link: "ScenicSpot",
    subMenu: [
      { name: "?????????", initUrl: initNorthIcon, hoverUrl: hoverNorthIcon, link: "attraction" },
      { name: "?????????", initUrl: initCentralIcon, hoverUrl: hoverCentralIcon, link: "attraction" },
      { name: "?????????", initUrl: initSouthIcon, hoverUrl: hoverSouthIcon, link: "attraction" },
      { name: "?????????", initUrl: initEastIcon, hoverUrl: hoverEastIcon, link: "attraction" },
      { name: "????????????", initUrl: initIsladnsIcon, hoverUrl: hoverIsladnsIcon, link: "attraction" },
    ]
  },
  {
    name1: "?????????",
    name2: "DELICACY",
    link: "Restaurant",
    subMenu: [
      { name: "????????????", initUrl: initMealIcon, hoverUrl: hoverMealIcon, link: "food" },
      { name: "????????????", initUrl: initDrinkIcon, hoverUrl: hoverDrinkIcon, link: "food" },
      { name: "????????????", initUrl: initSnackIcon, hoverUrl: hoverSnackIcon, link: "food" },
      { name: "????????????", initUrl: initSouvenirIcon, hoverUrl: hoverSouvenirIcon, link: "food" },
    ]
  },
  {
    name1: "?????????",
    name2: "ACTIVITY",
    link: "Activity",
    subMenu: [
      { name: "????????????", initUrl: initExhitionIcon, hoverUrl: hoverExhitionIcon, link: "activity" },
      { name: "????????????", initUrl: initCampingIcon, hoverUrl: hoverCampingIcon, link: "activity" },
      { name: "????????????", initUrl: initOutdoorIcon, hoverUrl: hoverOutdoorIcon, link: "activity" },
      { name: "????????????", initUrl: initCelebrationIcon, hoverUrl: hoverCelebrationIcon, link: "activity" },
    ]
  },
  {
    name1: "??????",
    name2: "HOTEL",
    link: "Hotel",
    subMenu: [
      { name: "????????????", initUrl: initFamilyIcon, hoverUrl: hoverFamilyIcon, link: "more" },
      { name: "????????????", initUrl: initHotSpringIcon, hoverUrl: hoverHotSpringIcon, link: "more" },
      { name: "????????????", initUrl: initFlowerIcon, hoverUrl: hoverFlowerIcon, link: "more" },
      { name: "????????????", initUrl: initHistoryIcon, hoverUrl: hoverHistoryIcon, link: "more" },
    ]
  }
];

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container flexBetween pos-rel">
        <Link to="/">
          <img src={imgLogo} alt="Logo" />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            {
              headerList.map((item) => (
                <li className={styles['menu-item']} key={item.link}>
                  <Link to={`/searchPage?category=${item.link}`} className="link-box">
                    <span className={styles.dot}></span>
                    <div className={styles['text-box']}>
                      <p>{item.name1}</p>
                      <p className={styles['sub-text']}>{item.name2}</p>
                    </div>
                  </Link>
                  <ul className={styles.subMenu}>
                    {
                      item.subMenu.map((subItem) => (
                        <li className={styles['subMenu-item']} key={subItem.initUrl}>
                          <IconHover className={styles.imgBox} init={subItem.initUrl} hover={subItem.hoverUrl} />
                          <p>{subItem.name}</p>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ))
            }
          </ul>
        </nav>
        <div className={styles['icon-box']}>
          <div>
            <img src={iconSearch} alt="search" />
          </div>
          <div className="white-back-icon">
            <img src={iconPerson} alt="person" />
          </div>
        </div>
      </div>
    </header>
  );
}
