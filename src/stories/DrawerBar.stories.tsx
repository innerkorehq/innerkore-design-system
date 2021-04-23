import React from 'react';
import { DrawerRight, DrawerRightTypes } from '../components/DrawerRight';
import { DrawerLeft, DrawerLeftTypes } from '../components/DrawerLeft/DrawerLeft';
import User from '../../public/img/user.svg';
import Menu from '../../public/img/drawer-menu.svg';
import Cart from "../../public/img/cart.svg";
import Envato from "../../public/img/envato.svg";
import Signin from "../../public/img/sign-in.svg";
import { DrawerBar } from '../components/DrawerBar';

export default {
  title: 'Mobile/DrawerBar',
  component: DrawerBar,
};

export const DrawerBarPrimary = (args) => {
    <DrawerBar {...args}>
      <DrawerRight 
        MenuItems={[
          {
            href: '#',
            iconImgSrc: 'static/media/public/img/cart.svg',
            menuTxt: 'Guest Cart'
          },
          {
            href: '#',
            iconImgSrc: 'static/media/public/img/envato.svg',
            menuTxt: 'Create an Envato Account'
          },
          {
            href: '#',
            iconImgSrc: 'static/media/public/img/sign-in.svg',
            menuTxt: 'Sign In'
          }
        ]}
        imgSrcIconRight="static/media/public/img/user.svg"
      />;
      <DrawerLeft 
           imgSrcIconLeft={Menu}
           SelectOptions={[{optionTxt: 'Web Themes & Template', href: '#'}, {optionTxt: 'Code', href: '#'}, {optionTxt: 'Video', href: '#'}, {optionTxt: 'Audio', href: '#'}, {optionTxt: 'Photos', href: '#'}, {optionTxt: '3D Files', href: '#'}]}
           Panels={[
            { 
              panelHeader: "All Items",
              PanelChildren: [
                  { panelLink: "Poular Files", href: "#" },
                  { panelLink: "Featured Files", href: "#" },
                  { panelLink: "Top New Files", href: "#" },
                  { panelLink: "Follow feed", href: "#" },
                  { panelLink: "Top Authors", href: "#" },
                  { panelLink: "Top New Authors", href: "#" },
                  { panelLink: "Public Collections", href: "#" },
                  { panelLink: "View All Categories", href: "#" }
      
              ]
            },
            { 
              panelHeader: "WordPress",
              PanelChildren: [
                  { panelLink: "Show All WordPress", href: "#" },
                  { panelLink: "Popular Items", href: "#" },
                  { panelLink: "Add-ons", href: "#" },
                  { panelLink: "Advertising", href: "#" },            
                  { panelLink: "Calandars", href: "#" },
                  { panelLink: "eCommerce", href: "#" },
                  { panelLink: "Elementor", href: "#" },
                  { panelLink: "Forms", href: "#" },
                  { panelLink: "Forums", href: "#" },
                  { panelLink: "Galleries", href: "#" },
                  { panelLink: "Interface Elements", href: "#" },
                  { panelLink: "Media", href: "#" },
                  { panelLink: "Membership", href: "#" },
                  { panelLink: "Newsletters", href: "#" },
                  { panelLink: "SEO", href: "#" },            
                  { panelLink: "Social Networking", href: "#" },
                  { panelLink: "Utilities", href: "#" },
                  { panelLink: "Widgets", href: "#" },
                  { panelLink: "Miscellaneous", href: "#" },
                  { panelLink: "WordPress Themes on ThemeForest", href: "#" },
              ]
            },
            { 
              panelHeader: "eCommerce",
              PanelChildren: [
                  { panelLink: "Show All eCommerce", href: "#" },
                  { panelLink: "Popular Items", href: "#" },
                  { panelLink: "Add-ons", href: "#" },
                  { panelLink: "Advertising", href: "#" },            
                  { panelLink: "Calandars", href: "#" },
                  { panelLink: "eCommerce", href: "#" },
                  { panelLink: "Elementor", href: "#" },
                  { panelLink: "Forms", href: "#" },
              ]
            },
            { 
              panelHeader: "Javascript",
              PanelChildren: [
                  { panelLink: "Show All eCommerce", href: "#" },
                  { panelLink: "Popular Items", href: "#" },
                  { panelLink: "Add-ons", href: "#" },
                  { panelLink: "Advertising", href: "#" },            
                  { panelLink: "Calandars", href: "#" },
                  { panelLink: "eCommerce", href: "#" },
                  { panelLink: "Elementor", href: "#" },
                  { panelLink: "Forms", href: "#" },
              ]
            },
            { 
              panelHeader: "CSS",
              PanelChildren: [
                  { panelLink: "Show All eCommerce", href: "#" },
                  { panelLink: "Popular Items", href: "#" },
                  { panelLink: "Add-ons", href: "#" },
                  { panelLink: "Advertising", href: "#" },            
                  { panelLink: "Calandars", href: "#" },
                  { panelLink: "eCommerce", href: "#" },
                  { panelLink: "Elementor", href: "#" },
                  { panelLink: "Forms", href: "#" },
              ]
            },
            { 
              panelHeader: "Mobile",
              PanelChildren: [
                  { panelLink: "Show All eCommerce", href: "#" },
                  { panelLink: "Popular Items", href: "#" },
                  { panelLink: "Add-ons", href: "#" },
                  { panelLink: "Advertising", href: "#" },            
                  { panelLink: "Calandars", href: "#" },
                  { panelLink: "eCommerce", href: "#" },
                  { panelLink: "Elementor", href: "#" },
                  { panelLink: "Forms", href: "#" },
              ]
            },
            { 
              panelHeader: "HTML5",
              PanelChildren: [
                  { panelLink: "Show All eCommerce", href: "#" },
                  { panelLink: "Popular Items", href: "#" },
                  { panelLink: "Add-ons", href: "#" },
                  { panelLink: "Advertising", href: "#" },            
                  { panelLink: "Calandars", href: "#" },
                  { panelLink: "eCommerce", href: "#" },
                  { panelLink: "Elementor", href: "#" },
                  { panelLink: "Forms", href: "#" },
              ]
            },
            { 
              panelHeader: "Skins",
              PanelChildren: [
                  { panelLink: "Show All eCommerce", href: "#" },
                  { panelLink: "Popular Items", href: "#" },
                  { panelLink: "Add-ons", href: "#" },
                  { panelLink: "Advertising", href: "#" },            
                  { panelLink: "Calandars", href: "#" },
                  { panelLink: "eCommerce", href: "#" },
                  { panelLink: "Elementor", href: "#" },
                  { panelLink: "Forms", href: "#" },
              ]
            },
            { 
              panelHeader: "WP Themes",
              PanelChildren: [
                  { panelLink: "Show All eCommerce", href: "#" },
                  { panelLink: "Popular Items", href: "#" },
                  { panelLink: "Add-ons", href: "#" },
                  { panelLink: "Advertising", href: "#" },            
                  { panelLink: "Calandars", href: "#" },
                  { panelLink: "eCommerce", href: "#" },
                  { panelLink: "Elementor", href: "#" },
                  { panelLink: "Forms", href: "#" },
              ]
            },
            { 
              panelHeader: "Plugins",
              PanelChildren: [
                  { panelLink: "Show All eCommerce", href: "#" },
                  { panelLink: "Popular Items", href: "#" },
                  { panelLink: "Add-ons", href: "#" },
                  { panelLink: "Advertising", href: "#" },            
                  { panelLink: "Calandars", href: "#" },
                  { panelLink: "eCommerce", href: "#" },
                  { panelLink: "Elementor", href: "#" },
                  { panelLink: "Forms", href: "#" },
              ]
            },
            { 
              panelHeader: "Mockup Generator",
              PanelChildren: [
                  { panelLink: "Show All eCommerce", href: "#" },
                  { panelLink: "Popular Items", href: "#" },
                  { panelLink: "Add-ons", href: "#" },
                  { panelLink: "Advertising", href: "#" },            
                  { panelLink: "Calandars", href: "#" },
                  { panelLink: "eCommerce", href: "#" },
                  { panelLink: "Elementor", href: "#" },
                  { panelLink: "Forms", href: "#" },
              ]
            },
            { 
              panelHeader: "More",
              PanelChildren: [
                  { panelLink: "Show All eCommerce", href: "#" },
                  { panelLink: "Popular Items", href: "#" },
                  { panelLink: "Add-ons", href: "#" },
                  { panelLink: "Advertising", href: "#" },            
                  { panelLink: "Calandars", href: "#" },
                  { panelLink: "eCommerce", href: "#" },
                  { panelLink: "Elementor", href: "#" },
                  { panelLink: "Forms", href: "#" },
              ]
            },
          ]
        }
      />

    </DrawerBar>
  }
  