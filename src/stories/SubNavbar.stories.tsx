import React from 'react';
import { SubNavbar, SubNavbarTypes } from '../components/SubNavbar';

export default {
    title: 'Mobile/SubNavbar',
    component: SubNavbar,
  };
  
  export const PrimarySubNavbar = (args: SubNavbarTypes) => {
      return <SubNavbar {...args}/>;
  };

  PrimarySubNavbar.args ={
    dropDownItems:[
       { dropDownTitle: 'All items',
            Options: [
                { optionTxt: "Popular Files", href: "#" },
                { optionTxt: "Featured Files", href: "#" },
                { optionTxt: "Top New Files", href: "#" },
                { optionTxt: "Follow feed", href: "#" },
                { optionTxt: "Top Authors", href: "#" },
                { optionTxt: "Top New Authors", href: "#" },
                { optionTxt: "Public Collections", href: "#" },
                { optionTxt: "View All Categories", href: "#" }
                ]
        },
        { dropDownTitle: 'PHP Scripts',
            Options: [  
                { optionTxt: "Show All PHP Scripts", href: "#" },
                { optionTxt: "Polpular Items", href: "#" },
                { optionTxt: "Add-ons", href: "#" },
                { optionTxt: "Calendars", href: "#" },
                { optionTxt: "Countdowns", href: "#" },
                { optionTxt: "Datebase Abstractions", href: "#" },
                { optionTxt: "Forms", href: "#" },
                { optionTxt: "Help and Support Tools", href: "#" },
                { optionTxt: "Images and Media", href: "#" },
                { optionTxt: "Loaders and Uploaders", href: "#" },
                { optionTxt: "Navigation", href: "#" },
                { optionTxt: "News Tickers", href: "#" },              
                { optionTxt: "Polls", href: "#" },
                { optionTxt: "Project Management Tools", href: "#" },
                { optionTxt: "Ratings and Charts", href: "#" },
                { optionTxt: "Search", href: "#" },
                { optionTxt: "Shopping Carts", href: "#" },
                { optionTxt: "Social Networking", href: "#" },
                { optionTxt: "Miscellaneous", href: "#" }            ]
        },
        { 
            dropDownTitle: "WordPress",
            Options: [
                { optionTxt: "Show All WordPress", href: "#" },
                { optionTxt: "Popular Items", href: "#" },
                { optionTxt: "Add-ons", href: "#" },
                { optionTxt: "Advertising", href: "#" },            
                { optionTxt: "Calandars", href: "#" },
                { optionTxt: "eCommerce", href: "#" },
                { optionTxt: "Elementor", href: "#" },
                { optionTxt: "Forms", href: "#" },
                { optionTxt: "Forums", href: "#" },
                { optionTxt: "Galleries", href: "#" },
                { optionTxt: "Interface Elements", href: "#" },
                { optionTxt: "Media", href: "#" },
                { optionTxt: "Membership", href: "#" },
                { optionTxt: "Newsletters", href: "#" },
                { optionTxt: "SEO", href: "#" },            
                { optionTxt: "Social Networking", href: "#" },
                { optionTxt: "Utilities", href: "#" },
                { optionTxt: "Widgets", href: "#" },
                { optionTxt: "Miscellaneous", href: "#" },
                { optionTxt: "WordPress Themes on ThemeForest", href: "#" },
            ]
        },
        { 
            dropDownTitle: "eCommerce",
            Options: [
                { optionTxt: "Show All eCommerce", href: "#" },
                { optionTxt: "Popular Items", href: "#" },
                { optionTxt: "Add-ons", href: "#" },
                { optionTxt: "Advertising", href: "#" },            
                { optionTxt: "Calandars", href: "#" },
                { optionTxt: "eCommerce", href: "#" },
                { optionTxt: "Elementor", href: "#" },
                { optionTxt: "Forms", href: "#" },
            ]
        },
        { 
            dropDownTitle: "Javascript",
            Options: [
                { optionTxt: "Show All eCommerce", href: "#" },
                { optionTxt: "Popular Items", href: "#" },
                { optionTxt: "Add-ons", href: "#" },
                { optionTxt: "Advertising", href: "#" },            
                { optionTxt: "Calandars", href: "#" },
                { optionTxt: "eCommerce", href: "#" },
                { optionTxt: "Elementor", href: "#" },
                { optionTxt: "Forms", href: "#" },
            ]
        },
        { 
            dropDownTitle: "CSS",
            Options: [
                { optionTxt: "Show All eCommerce", href: "#" },
                { optionTxt: "Popular Items", href: "#" },
                { optionTxt: "Add-ons", href: "#" },
                { optionTxt: "Advertising", href: "#" },            
                { optionTxt: "Calandars", href: "#" },
                { optionTxt: "eCommerce", href: "#" },
                { optionTxt: "Elementor", href: "#" },
                { optionTxt: "Forms", href: "#" },
            ]
        },
        { 
            dropDownTitle: "Mobile",
            Options: [
                { optionTxt: "Show All eCommerce", href: "#" },
                { optionTxt: "Popular Items", href: "#" },
                { optionTxt: "Add-ons", href: "#" },
                { optionTxt: "Advertising", href: "#" },            
                { optionTxt: "Calandars", href: "#" },
                { optionTxt: "eCommerce", href: "#" },
                { optionTxt: "Elementor", href: "#" },
                { optionTxt: "Forms", href: "#" },
            ]
        },
        { 
            dropDownTitle: "HTML5",
            Options: [
                { optionTxt: "Show All eCommerce", href: "#" },
                { optionTxt: "Popular Items", href: "#" },
                { optionTxt: "Add-ons", href: "#" },
                { optionTxt: "Advertising", href: "#" },            
                { optionTxt: "Calandars", href: "#" },
                { optionTxt: "eCommerce", href: "#" },
                { optionTxt: "Elementor", href: "#" },
                { optionTxt: "Forms", href: "#" },
            ]
        },
        { 
            dropDownTitle: "Skins",
            Options: [
                { optionTxt: "Show All eCommerce", href: "#" },
                { optionTxt: "Popular Items", href: "#" },
                { optionTxt: "Add-ons", href: "#" },
                { optionTxt: "Advertising", href: "#" },            
                { optionTxt: "Calandars", href: "#" },
                { optionTxt: "eCommerce", href: "#" },
                { optionTxt: "Elementor", href: "#" },
                { optionTxt: "Forms", href: "#" },
            ]
        },
        { 
            dropDownTitle: "WP Themes",
            Options: [
                { optionTxt: "Show All eCommerce", href: "#" },
                { optionTxt: "Popular Items", href: "#" },
                { optionTxt: "Add-ons", href: "#" },
                { optionTxt: "Advertising", href: "#" },            
                { optionTxt: "Calandars", href: "#" },
                { optionTxt: "eCommerce", href: "#" },
                { optionTxt: "Elementor", href: "#" },
                { optionTxt: "Forms", href: "#" },
            ]
        },
        { 
            dropDownTitle: "Plugins",
            Options: [
                { optionTxt: "Show All eCommerce", href: "#" },
                { optionTxt: "Popular Items", href: "#" },
                { optionTxt: "Add-ons", href: "#" },
                { optionTxt: "Advertising", href: "#" },            
                { optionTxt: "Calandars", href: "#" },
                { optionTxt: "eCommerce", href: "#" },
                { optionTxt: "Elementor", href: "#" },
                { optionTxt: "Forms", href: "#" },
            ]
        },
        { 
            dropDownTitle: "Mockup Generator",
            Options: [
                { optionTxt: "Show All eCommerce", href: "#" },
                { optionTxt: "Popular Items", href: "#" },
                { optionTxt: "Add-ons", href: "#" },
                { optionTxt: "Advertising", href: "#" },            
                { optionTxt: "Calandars", href: "#" },
                { optionTxt: "eCommerce", href: "#" },
                { optionTxt: "Elementor", href: "#" },
                { optionTxt: "Forms", href: "#" },
            ]
        },
        { 
            dropDownTitle: "More",
            Options: [
                { optionTxt: "Show All eCommerce", href: "#" },
                { optionTxt: "Popular Items", href: "#" },
                { optionTxt: "Add-ons", href: "#" },
                { optionTxt: "Advertising", href: "#" },            
                { optionTxt: "Calandars", href: "#" },
                { optionTxt: "eCommerce", href: "#" },
                { optionTxt: "Elementor", href: "#" },
                { optionTxt: "Forms", href: "#" },
            ]
        },
    ]
  }