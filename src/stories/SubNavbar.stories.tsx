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
       { dropDownTitle: 'dtitle',
            Options: [ { optionTxt: 'Options Options OptionsOptions', href: '#'}, { optionTxt: 'Options2', href: '#'} 
            ]
        },
        { dropDownTitle: 'dtitle2',
            Options: [ { optionTxt: 'Options', href: '#'}, { optionTxt: 'Options2', href: '#'} 
            ]
        }
    ]
  }