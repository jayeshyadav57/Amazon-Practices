import React from 'react'
import data from '../../data'
import CardComponents from './CardComponents'
export default function Card({ type }) {
  let newData = data.filter(ele => ele.type.includes(type.toLowerCase()))
  return newData.length !== 0 ? <CardComponents info={newData} /> : <CardComponents info={data} />
}
