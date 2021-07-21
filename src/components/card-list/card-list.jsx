import React from "react";
import {Card} from "../card/card";
import './card-list.css'

export const CardList = (props)=>{
    return<div className='card-list'>{
            props.monsters.map(monsters => {
             return <Card key={monsters.id} monster = {monsters}/>
            })
          }
    </div>
}