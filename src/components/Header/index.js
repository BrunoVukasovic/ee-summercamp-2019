import React from "react";
import cn from "classnames";
import Container from "../Container";
import Logo from "../Logo";
import NavLink from "./NavLink";
import styles from "./styles.module.css";
import NavLinkDrpodown from "./NavLinkDrpodown";
import DropdownContent from "./DropdownContent";
import dropKrka from "./Images/dropKrka.jpg";
import dropPlitvice from "./Images/dropPlitvice.jpg";
import dropKlis from "./Images/dropKlis.jpg";
import dropOmis from "./Images/dropOmis.jpg";
import dropDubrovnik from "./Images/dropDubrovnik.jpg";
import dropMostar from "./Images/dropMostar.jpg";

import dropRafting from "./Images/dropRafting.jpg";
import dropZip from "./Images/dropZip.jpg";
import dropCanyoning from "./Images/dropCanyoning.jpg";
import dropCycling from "./Images/dropCycling.jpg";
import dropDiving from "./Images/dropDiving.jpg";
import dropSeaKayaking from "./Images/dropSeaKayaking.jpg";

import dropBlueCave from "./Images/dropBlueCave.jpg";
import dropBlueLagoon from "./Images/dropBlueLagoon.jpg";
import dropBrac from "./Images/dropBrac.jpg";
import dropHvar from "./Images/dropHvar.jpg";
import dropSailing from "./Images/dropSailing.jpg";
import dropVis from "./Images/dropVis.jpg";

import classNames from "classnames";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

export default () => {
  library.add(faSearch);
  library.add(faAngleDoubleDown);

  return (
    <header className={styles.Header}>
      <Container className={styles.Container}>
        <div className={styles.Logo}>
          <Logo />
        </div>

        <div className={styles.MobileDropdown}>
          <button className={styles.MobileDropbtn}>
            Menu
            <FontAwesomeIcon
              icon="angle-double-down"
              className={styles.MenuArrow}
            />
          </button>
          <div className={styles.MobileDropdownContent}>
            <Link to="/" exact="true" className={styles.MobileLink}>
              Home
            </Link>
            <Link to="/land-tours" className={styles.MobileLink}>
              Land Tours
            </Link>
            <Link to="/sea-tours" className={styles.MobileLink}>
              Sea Tours
            </Link>
            <Link to="/adventures" className={styles.MobileLink}>
              Adventures
            </Link>
            <Link to="/my-trips" className={styles.MobileLink}>
              My Trips
            </Link>
            <Link to="/blog" className={styles.MobileLink}>
              Travel Stories
            </Link>
            <Link to="/search" className={styles.MobileLink}>
              Search
            </Link>
          </div>
        </div>

        <div className={styles.Home}>
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>

        <div className={styles.TravelStories}>
          <NavLink to="/users">Users</NavLink>
        </div>

        <div className={styles.logIn}>
          <NavLink to="/my-trips">My Trips</NavLink>
        </div>

        <div className={cn(styles.LandToursDropDown, styles.Dropdown)}>
          <NavLinkDrpodown to="/land-tours">
            Land Tours <FontAwesomeIcon icon="angle-double-down" />
          </NavLinkDrpodown>
          <DropdownContent>
            <Link to="/krka">
              <img
                className={classNames({
                  [styles.DropImage]: true,
                  [styles.Image1]: true
                })}
                src={dropKrka}
                alt="dropKrka"
              />
            </Link>
            <Link to="/plitvice">
              <img
                className={classNames({
                  [styles.DropImage]: true,
                  [styles.Image2]: true
                })}
                src={dropPlitvice}
                alt="dropPlitvice"
              />
            </Link>
            <Link to="/klis">
              <img
                className={classNames({
                  [styles.DropImage]: true,
                  [styles.Image3]: true
                })}
                src={dropKlis}
                alt="dropKlis"
              />
            </Link>
            <Link to="/omis">
              <img
                className={classNames({
                  [styles.DropImage]: true,
                  [styles.Image4]: true
                })}
                src={dropOmis}
                alt="dropOmis"
              />
            </Link>
            <Link to="/dubrovnik">
              <img
                className={classNames({
                  [styles.DropImage]: true,
                  [styles.Image5]: true
                })}
                src={dropDubrovnik}
                alt="dropDubrovnik"
              />
            </Link>
            <Link to="/mostar">
              <img
                className={classNames({
                  [styles.DropImage]: true,
                  [styles.Image6]: true
                })}
                src={dropMostar}
                alt="dropMostar"
              />
            </Link>
          </DropdownContent>
        </div>

        <div className={cn(styles.SeaToursDropDown, styles.Dropdown)}>
          <NavLinkDrpodown to="/sea-tours">
            Sea Tours <FontAwesomeIcon icon="angle-double-down" />
          </NavLinkDrpodown>
          <DropdownContent>
            <Link to="/blue-cave">
              <img
                className={classNames({
                  [styles.DropImage]: true,
                  [styles.Image1]: true
                })}
                src={dropBlueCave}
                alt="dropBlueCave"
              />
            </Link>
            <Link to="/blue-lagoon">
              <img
                className={classNames({
                  [styles.DropImage]: true,
                  [styles.Image2]: true
                })}
                src={dropBlueLagoon}
                alt="dropBlueLagoon"
              />
            </Link>
            <Link to="/brac">
              <img
                className={classNames({
                  [styles.DropImage]: true,
                  [styles.Image3]: true
                })}
                src={dropBrac}
                alt="dropBrac"
              />
            </Link>
            <Link to="/hvar">
              <img
                className={classNames({
                  [styles.DropImage]: true,
                  [styles.Image4]: true
                })}
                src={dropHvar}
                alt="dropHvar"
              />
            </Link>
            <Link to="/sailing">
              <img
                className={classNames({
                  [styles.DropImage]: true,
                  [styles.Image5]: true
                })}
                src={dropSailing}
                alt="dropSailing"
              />
            </Link>
            <Link to="/vis">
              <img
                className={classNames({
                  [styles.DropImage]: true,
                  [styles.Image6]: true
                })}
                src={dropVis}
                alt="dropVis"
              />
            </Link>
          </DropdownContent>
        </div>

        <div className={cn(styles.AdventuresDropDown, styles.Dropdown)}>
          <NavLinkDrpodown to="/adventures">
            Adventures <FontAwesomeIcon icon="angle-double-down" />
          </NavLinkDrpodown>
          <DropdownContent>
            <Link to="/rafting">
              <img
                className={classNames({
                  [styles.DropImage]: true,
                  [styles.Image1]: true
                })}
                src={dropRafting}
                alt="dropRafting"
              />
            </Link>
            <Link to="/zip">
              <img
                className={classNames({
                  [styles.DropImage]: true,
                  [styles.Image2]: true
                })}
                src={dropZip}
                alt="dropZip"
              />
            </Link>
            <Link to="/canyoning">
              <img
                className={classNames({
                  [styles.DropImage]: true,
                  [styles.Image3]: true
                })}
                src={dropCanyoning}
                alt="dropCanyoning"
              />
            </Link>
            <Link to="/cycling">
              <img
                className={classNames({
                  [styles.DropImage]: true,
                  [styles.Image4]: true
                })}
                src={dropCycling}
                alt="dropCycling"
              />
            </Link>
            <Link to="/diving">
              <img
                className={classNames({
                  [styles.DropImage]: true,
                  [styles.Image5]: true
                })}
                src={dropDiving}
                alt="dropDiving"
              />
            </Link>
            <Link to="/sea-kayaking">
              <img
                className={classNames({
                  [styles.DropImage]: true,
                  [styles.Image6]: true
                })}
                src={dropSeaKayaking}
                alt="dropSeaKayaking"
              />
            </Link>
          </DropdownContent>
        </div>

        <div className={styles.searchBar}>
          <NavLink to="/search" className={styles.searchBar}>
            Search &nbsp;
            <FontAwesomeIcon icon="search" />
          </NavLink>
        </div>
      </Container>
    </header>
  );
};
