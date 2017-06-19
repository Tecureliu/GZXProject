import React, { Component } from 'react';
import {Link} from 'react-router'
import './text.scss'

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state={
      countStep:1,
      startX:0,
      changeX:0,
      startLeft:0,
      ele:null
    }
    this.autoPlay = this.autoPlay.bind(this);
    this.textTimer = null;
    // this.carouselStop = this.carouselStop.bind(this);
    // this.carouselStart = this.carouselStart.bind(this);
    // this.carouselMove = this.carouselMove.bind(this);
  }
  componentWillUnmount() {
    window.clearInterval(this.textTimer);
    // console.log(this.textTimer)
  }
  componentDidMount() {
    this.state.ele = document.getElementById('bannerInner_text')
    let ele = this.state.ele
    // console.log(this.state.ele)
    ele.style.top = -document.getElementsByClassName('imgBox_text')[0].offsetHeight + "px";
    const num = (this.props.newsList.length+2)*100+"%";
    ele.style.Height = num;
    const arryImg = document.getElementsByClassName('imgBox_text');
    for(let i = 0;i<arryImg.length;i++){
      arryImg[i].style.Height = 100/(this.props.newsList.length+2)+"%";
    }
    window.clearInterval(this.textTimer)
    this.textTimer = window.setInterval(this.autoPlay, this.props.delay);
    // console.log(this.textTimer)
    // console.log(this.refs.bannerInner.style.top)
    
  }
  
  autoPlay(){
    // console.log(this.state.ele)
    let ele = this.state.ele
    let countStep = this.state.countStep,count = this.props.newsList.length + 1;
    if (countStep >= (count - 1)) {
        countStep = 0;
        ele.style.top = 0;
    }
    countStep++;
    this.setState({countStep:countStep});
    this.animate({top: -countStep * document.getElementsByClassName('imgBox_text')[0].offsetHeight}, 500);
  }
  
  animate(obj, delay) {
    // console.log(this.state.ele)
        let ele = this.state.ele
        let times = 0;
        let interval = 50;
        let oChange = {};
        let oBegin = {};
        let flag = 0;
        for (let attr in obj) {
            let target = obj[attr];
            let begin = parseFloat(getComputedStyle(ele)[attr]);
            let change = target - begin;
            if (change) {
                oBegin[attr] = begin;
                oChange[attr] = change;
                flag++;
            }
        }
        if (flag == 0) {
            return;
        }
        window.clearInterval(ele.timer);
        function countStep() { 
            // console.log(ele)

            times += interval;
            if (times < delay) {
                for (let attr in oChange) {
                    let value = times / delay * oChange[attr] + oBegin[attr];
                    ele['style'][attr] = value + "px";
                }
            }
            else {
                for (let attr in oChange) {
                  ele['style'][attr] = obj[attr] + "px";
                }
                window.clearInterval(ele.timer);
                ele.timer = null;
            }
        }
        ele.timer = window.setInterval(countStep, interval);
    }

  render() {
   
    const bannerList = this.props.newsList;
    return (
      <div className="banner_text" id="banner_text">
        <div className="bannerInner_text" id="bannerInner_text" ref="bannerInner">
          {/*把第最后一张图片复制一张放最后，实现手动滑动的无缝滚动*/
            bannerList.map(function(item,index){
              if(index == bannerList.length-1){
              return <a className="imgBox_text"><p>{item.news}</p></a>
              }
            })
          }
          {
            bannerList.map(function(item,index){
              return <Link to={item.route}><a className="imgBox_text"><p>{item.news}</p></a></Link>
            })
          }
          {/*把第一张图片复制一张放最后，实现无缝滚动*/
            bannerList.map(function(item,index){
              if(index == 0){
              return <a className="imgBox_text"><p>{item.news}</p></a>
              }
            })
          }
        </div>
       
      </div>
    );
  }
};