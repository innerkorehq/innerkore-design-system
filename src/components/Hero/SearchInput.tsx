import React, { FC } from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './SearchInput.css'
        
export const SearchInput = () => {   
    return (
        <div id='myInput'>
            <Input 
                placeholder="e.g. responsive Wordpress"
                className='h-20 shadow-lg border-0 rounded-lg'
                suffix={<Button type="primary" size='large' className='rounded-md px-5' icon={<SearchOutlined />}>Search</Button>}
            />
        </div>
    );
}

export default SearchInput;
