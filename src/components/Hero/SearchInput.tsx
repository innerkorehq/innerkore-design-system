import React, { FC } from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './SearchInput.css'

type SearchInputType = {

}
        

export const SearchInput: FC<SearchInputType> = ({}) => {   
    return (
        <div id='myInput'>
            <Input 
                placeholder="e.g. responsive Wordpress"
                className='h-16 shadow-lg border-0 text-lg'
                suffix={<Button type="primary" icon={<SearchOutlined />}>Search</Button>}
            />
        </div>
    );
}
