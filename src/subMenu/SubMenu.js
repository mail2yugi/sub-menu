import React from 'react';
import  "./SubMenu.css";

class DropdownMenu extends React.Component {

    getMenuItemTitle = (menuItem, index, depthLevel) => {
      return menuItem.title;
    };
  
    menuItemClickHandler = (menuItem) => {
        this.props.clickHandler(menuItem);
    };

    getMenuItem = (menuItem, depthLevel, index) => {
      let title = this.getMenuItemTitle(menuItem, index, depthLevel);
  
      if (menuItem.submenu && menuItem.submenu.length > 0) {
        return (
          <li>
            {title}
            <DropdownMenu config={menuItem.submenu} submenu={true} clickHandler={this.props.clickHandler}/>
          </li>
        );
      } else {
        return <li onClick={this.menuItemClickHandler.bind(this, menuItem)}>{title}</li>;
      }
    };
  
    render = () => {
      let { config } = this.props;
  
      let options = [];
      config.map((item, index) => {
        options.push(this.getMenuItem(item, 0, index));
      });
  
      if (this.props.submenu && this.props.submenu === true)
        return <ul>{options}</ul>;
  
      return <ul className="dropdown-menu">{options}</ul>;
    };
  }
  
  export default DropdownMenu;  