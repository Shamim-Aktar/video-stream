import React from 'react'
import styled from 'styled-components'
import Player from '../player'
const LiveWrapper=styled.div ``
const LiveVideo=styled.div `
display:flex;
justify-content:center;
`
export default class Watch extends React.Component{
render(){

   return <LiveWrapper>
           <h2>Watch work</h2>
           <LiveVideo>
           <Player streamPath={'shamim'}></Player>
        </LiveVideo>
</LiveWrapper>
}
}